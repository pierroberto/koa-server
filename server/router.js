const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();

router.get('/hello', (ctx, next) => {
  console.log('hello');
});


module.exports = router;
