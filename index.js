const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const logger = require('koa-logger');
const router = require('./server/router');


app.use(serve('./client'));
app.use(router.routes());



app.listen(3000);
