import * as router  from '../routers/router_decorator'
import { Context } from 'koa';
import {getUserById} from '../service/user'

// function con(target, name, descriptor){
//     console.log(target,name,descriptor)
// }
export default class UserController{
    @router.get('/login')
    login(ctx:Context){
        ctx.body = 'Hello World';
    }
    @router.get('/getUser')
    getUser(ctx:Context){
        console.log(ctx.query)
        console.log(getUserById(Number(ctx.query.userId)))
    }
}