import * as router  from '../routers/router_decorator'
import { Context } from 'koa';
import {User} from '../model/User'

export default class UserController{
    @router.get('/login')
    login(ctx:Context){
        ctx.body = 'Hello World';
    }
    @router.get('/getUser')
    async getUser(ctx:Context){
        const res =  await User.getUserById(Number(ctx.query.userId))
        ctx.response.body = res.dataValues
    }
}