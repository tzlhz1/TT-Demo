"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const http = require("http");
const koaBodyparser = require("koa-bodyparser");
const routers_1 = require("./routers");
const config_1 = require("./config");
const app = new Koa();
// 路由
const router = routers_1.default.init();
app.use(koaBodyparser());
app.use(router.routes()).use(router.allowedMethods());
// create server
const server = http.createServer(app.callback());
server.listen(config_1.port);
server.on('listening', () => {
    console.info('Server is listening on port: %d', config_1.port);
});
