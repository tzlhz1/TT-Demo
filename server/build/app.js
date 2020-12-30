"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const http = require("http");
const routers_1 = require("./routers");
const config_1 = require("./config");
const app = new Koa();
console.log('Router===>', routers_1.default);
// 路由
const router = routers_1.default.init();
app.use(router.routes()).use(router.allowedMethods());
// create server
const server = http.createServer(app.callback());
server.listen(config_1.default.port);
server.on('listening', () => {
    console.info('Server is listening on port: %d', config_1.default.port);
});
