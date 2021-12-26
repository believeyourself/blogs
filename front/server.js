/*
 * @Date: 2021-09-29 17:27:38
 * @LastEditors: lzj
 * @LastEditTime: 2021-12-09 15:21:32
 * @FilePath: \qianduan.shop\server.js
 */
const express = require('express');
const Stream = require('stream');
const app = express();

app.use(express.static('dist'));
app.use(async (req, res) => {
  const render = require('./dist/umi.server');
  res.setHeader('Content-Type', 'text/html');
  const context = {};
  const { html, error, rootContainer } = await render({
    // 有需要可带上 query
    path: req.url,
    context,

    // 可自定义 html 模板
    // htmlTemplate: defaultHtml,

    // 启用流式渲染
    mode: 'stream',

    // html 片段静态标记（适用于静态站点生成）
    // staticMarkup: false,

    // 扩展 getInitialProps 在服务端渲染中的参数
    // getInitialPropsCtx: {},
  });

  // support stream content
  if (html instanceof Stream) {
    html.pipe(res);
    html.on('end', function () {
      res.end();
    });
  } else {
    res.send();
  }
});
app.listen(8080);
