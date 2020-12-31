import * as router  from '../routers/router_decorator'
import {Context} from 'koa'
export default class CommonController{
    @router.all('/')
    Home(ctx:Context){
        ctx.body ='home'
    }
}