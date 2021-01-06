import * as router  from '../routers/router_decorator'
import { Context } from 'koa';
import {User} from '../model/User'

export default class UserController{
    @router.post('/login')
    async login(ctx:Context,{userName,passWord}){
        const state = await User.login(userName,passWord)
        let body = {
         code:200,
         data:state,
         mes:state?'登陆成功':'登陆失败'
        }
        ctx.body = body
    }
    @router.get('/getUser')
    async getUser(ctx:Context){
        const res =  await User.getUserById(Number(ctx.query.userId))
        ctx.response.body = res.dataValues
    }
}