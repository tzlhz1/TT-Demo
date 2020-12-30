import * as Koa from 'koa';

import * as http from 'http';
import Router from './routers';
import config from './config'
const app = new Koa()

// 路由
const router = Router.init();

app.use(router.routes()).use(router.allowedMethods());

// create server
const server = http.createServer(app.callback())

server.listen(config.port)

server.on('listening', () => {
    console.info('Server is listening on port: %d', config.port);
});