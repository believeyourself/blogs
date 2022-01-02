import { Controller,Context } from 'egg';
import * as path from "path";

export default class HomeController extends Controller {
  serverRender:any;
  constructor(ctx:Context) {
    super(ctx);
    this.serverRender = require(path.join(ctx.app.baseDir, '../front/dist/umi.server'));
  }
  async index() {
    const { ctx } = this;
    // global.host = `${ctx.request.protocol}://${ctx.request.host}`;
    // global.href = ctx.request.href;
    // global._cookies = ctx.helper.parseCookie(ctx);
    // global._navigatorLang = ctx.helper.parseNavLang(ctx);

    // 先走 eggjs 的v iew 渲染
    // const htmlTemplate = await ctx.view.render('index.html');

    // 将 html 模板传到服务端渲染函数中
    const context = {};
    const { error, html } = await this.serverRender({
      // 有需要可带上 query
      path: ctx.req.url,
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

    if (error) {
      ctx.logger.error(
        '[SSR ERROR] 渲染报错，切换至客户端渲染',
        error,
        ctx.url,
      );
    }
    ctx.type = 'text/html';
    ctx.status = 200;
    ctx.body = html;
  }
}
