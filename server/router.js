const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();

router.get('/hi', (ctx, next) => {
  ctx.status = 200;
});

router.get('/name/:name', (ctx) => {
  console.log(ctx.params.name)
  ctx.status = 200;

})


module.exports = router;
