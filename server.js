/**
 * 服务端
 * @author Philip
 */
const Koa = require('koa')
const app = new Koa()
const path = require('path')

app.use(require('koa-static')(path.join(__dirname) + '/html'));

app.use(async (ctx) => {
  ctx.body = 'web practice';
});

app.listen(3000);