import * as Koa from 'Koa'
import * as KoaRouter from 'koa-router'
import '../controller/UserController'
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
        // glob.sync(join(__dirname,'../controller/**/*.js')).forEach(require)

        //挂载路由
        for(const {method,path,middlewares} of this.routerSet){
            router[method](path,...middlewares);
        }

        router.all('*',(ctx:Koa.Context)=>{
            ctx.status = 404;
            ctx.error('Router Not Found');
        })
        return router;
    }
}