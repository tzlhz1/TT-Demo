import * as Koa from 'Koa'
import * as KoaRouter from 'koa-router'
import * as glob from 'glob'
import {join} from 'path'
const router = new KoaRouter()
/**
 * 路由
 * 
 * @export
 * @class Router
 */
export default class Router {
    static routerSet: Set<{
        method:string,
        path:string[],
        middlewares:Koa.Middleware[]
    }> = new Set();

    /**
     * 初始化路由
     * 
     * @static
     * @returns
     * @memberof Router
     */
    static init(){
        //加载所有控制起
        glob.sync(join(__dirname,'../controller/**/*.js')).forEach(require)
        
        //挂载路由
        for(const {method,path,middlewares} of this.routerSet){
            router[method](path,...middlewares);
        }
        // router.all('*',(ctx:Koa.Context)=>{
        //     ctx.status = 404;
        //     ctx.error('Router Not Found');
        // })////TODO  报错原因参数类型不匹配
        return router;
    }
}