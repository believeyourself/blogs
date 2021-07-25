import Koa = require("koa");

const App = new Koa();
const router = require("koa-router")();

App.use(async (ctx, next) => {
    ctx.body = 'Hello World';
    console.log(App.keys);
    await next();
});   

App.listen(3000);