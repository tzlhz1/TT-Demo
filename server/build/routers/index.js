"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KoaRouter = require("koa-router");
const glob = require("glob");
const path_1 = require("path");
const router = new KoaRouter();
/**
 * 路由
 *
 * @export
 * @class Router
 */
class Router {
    /**
     * 初始化路由
     *
     * @static
     * @returns
     * @memberof Router
     */
    static init() {
        //加载所有控制起
        glob.sync(path_1.join(__dirname, '../controller/**/*.js')).forEach(require);
        //挂载路由
        for (const { method, path, middlewares } of this.routerSet) {
            router[method](path, ...middlewares);
        }
        // router.all('*',(ctx:Koa.Context)=>{
        //     ctx.status = 404;
        //     ctx.error('Router Not Found');
        // })////TODO  报错原因参数类型不匹配
        return router;
    }
}
exports.default = Router;
Router.routerSet = new Set();
