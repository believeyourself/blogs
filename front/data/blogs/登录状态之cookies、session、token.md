# 背景

我们都知道 http 是无状态的，这也就意味着请求方和响应方之间无法维护状态，都是一次性的，他不知道请求前都发生过什么。但在有的应用场景下我们需要维护状态，比如各种后台管理系统都需要登录才能进行各种操作，这时我们就需要维护用户的登录状态。

常见的登录方案有：

1.cookies+session

2.json web token(JWT)

# cookie 以及 session

cookie 是前端存储的一种，但相比于 localStorage 等其他方式，借助 HTTP 头、浏览器能力，cookie 可以做到前端无感知。

一般过程是这样的：

- 在提供标记的接口，通过 HTTP 返回头的 Set-Cookie 字段，直接「种」到浏览器上。
- 浏览器发起请求时，会自动把 cookie 通过 HTTP 请求头的 Cookie 字段，带给接口。
- 服务器以及 Cookie 中的 SessionId 字段查询当前请求所属用户的用户 session 数据。

## cookie 配置

- **Domain / Path**
  Domain 属性指定浏览器发出 HTTP 请求时，哪些域名要附带这个 Cookie。如果没有指定该属性，浏览器会默认将其设为当前 URL 的一级域名，比如 http://www.example.com 会设为 http://example.com，而且以后如果访问http://example.com的任何子域名，HTTP 请求也会带上这个 Cookie。如果服务器在 Set-Cookie 字段指定的域名，不属于当前域名，浏览器会拒绝这个 Cookie。
  Path 属性指定浏览器发出 HTTP 请求时，哪些路径要附带这个 Cookie。只要浏览器发现，Path 属性是 HTTP 请求路径的开头一部分，就会在头信息里面带上这个 Cookie。比如，PATH 属性是/，那么请求/docs 路径也会包含该 Cookie。当然，前提是域名必须一致。
- **Expires / Max-Age**
  Expires 属性指定一个具体的到期时间，到了指定时间以后，浏览器就不再保留这个 Cookie。它的值是 UTC 格式。如果不设置该属性，或者设为 null，Cookie 只在当前会话（session）有效，浏览器窗口一旦关闭，当前 Session 结束，该 Cookie 就会被删除。另外，浏览器根据本地时间，决定 Cookie 是否过期，由于本地时间是不精确的，所以没有办法保证 Cookie 一定会在服务器指定的时间过期。
  Max-Age 属性指定从现在开始 Cookie 存在的秒数，比如 60 _ 60 _ 24 \* 365（即一年）。过了这个时间以后，浏览器就不再保留这个 Cookie。
  如果同时指定了 Expires 和 Max-Age，那么 Max-Age 的值将优先生效。
  如果 Set-Cookie 字段没有指定 Expires 或 Max-Age 属性，那么这个 Cookie 就是 Session Cookie，即它只在本次对话存在，一旦用户关闭浏览器，浏览器就不会再保留这个 Cookie。
- **Secure / HttpOnly**
  Secure 属性指定浏览器只有在加密协议 HTTPS 下，才能将这个 Cookie 发送到服务器。另一方面，如果当前协议是 HTTP，浏览器会自动忽略服务器发来的 Secure 属性。该属性只是一个开关，不需要指定值。如果通信是 HTTPS 协议，该开关自动打开。
  HttpOnly 属性指定该 Cookie 无法通过 JavaScript 脚本拿到，主要是 Document.cookie 属性、XMLHttpRequest 对象和 Request API 都拿不到该属性。这样就防止了该 Cookie 被脚本读到，只有浏览器发出 HTTP 请求时，才会带上该 Cookie。

## 服务端 session

session 本意是指客户端与服务器的会话状态，由于凭证存储到了服务端，后来也把这些存在服务端的信息称为 session。
现在服务器自己维护登录状态，仅发给客户端一个 key，然后在自己维护一个 key-value 表，如果请求中有 key，并且在表中可以找到对应的 value，则视为合法。

## 问题

### 1.集群服务器 session 同步

可以将 session 抽离出来统一管理，如使用 Redis 等服务。

### 2.无法避免 CSRF 攻击

由于 SessionId 存放在 Cookie 中，所以无法避免 [CSRF]: https://www.cnblogs.com/imgss/p/csrf.html 攻击。

### 3.跨域请求的 cookie

[https://www.cnblogs.com/imgss/p/cors.html](https://www.cnblogs.com/imgss/p/cors.html)

### 4.cookie 共享

同一域名下的 cookie 共享。

# jWT

使用 JWT 维护登陆态，服务器不再需要维护状态表，他仅给客户端发送一个加密的数据 token，每次请求都带上这个加密的数据，再解密验证是否合法即可。由于是加密的数据，即使用户可以修改，命中几率也很小。

## node 中 JWT 的简单应用

第一步，在你的/login 路由中使用 jsonwebtoken 中间件用于生成 token：

```
const jwt = require('jsonwebtoken')
let token = jwt.sign({
name: user name
}, config.secret, {
expiresIn: '24h'
})
res.cookie('token', token)
```

复制代码具体使用方法请查看 jsonwebtoken 的 Github
第二步，在 Node 的入口文件 app.js 中注册 express-jwt 中间件用于验证 token：

```
const expressJwt = require('express-jwt')
app.use(expressJwt({
secret: config.secret,
getToken: (req) => {
return req.cookies.token || null
}
}).unless({
path: [
'/login'
]
}))
```

复制代码如果 getToken 返回 null，中间件会抛出 UnauthorizedError 异常：

```
app.use(function (err, req, res, next) {
//当 token 验证失败时会抛出如下错误
if (err.name === 'UnauthorizedError') {
 res.status(401).json({
status: 'fail',
message: '身份校验过期，请重新登陆'
});
}
});
```
