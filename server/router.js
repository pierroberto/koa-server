const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const name = require('../controllers/letters');
const letter = require('../controllers/addletters');


router.get('/hi', (ctx, next) => {
  ctx.status = 200;
});

router.get('/name/:name', ctx => {
  console.log(ctx.params.name)
  ctx.status = 200;
});

router.get('/letter', ctx => {
  name().then((data, fail) => {
    ctx.status = 200;
  })
});

router.post('/addletter', ctx => {
  letter([1,'a','b','c']).then((data, fail) => {
    console.log(data)
    ctx.status = 200
  });
});

module.exports = router;
