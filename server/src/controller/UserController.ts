import * as router  from '../routers/router_decorator'
import { Context } from 'koa';

export default class UserController{
    @router.get('/login')
    login(ctx:Context){
        ctx.body = 'Hello World';
    }
}