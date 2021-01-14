import * as router  from '../routers/router_decorator'
import { Context } from 'koa';
import {User} from '../model/User'
import { response} from '../lib/comon'
export default class UserController{
    @router.post('/login')
    async login(ctx:Context,{userName,passWord}){
        const state = await User.login(userName,passWord)
        response(ctx,state,state?'登陆成功':'登陆失败')
    }
    @router.get('/getUser')
    async getUser(ctx:Context){
        const res =  await User.getUserById(Number(ctx.query.userId))
        ctx.response.body = res.dataValues
    }


    // @router.get('/user/tripTrend')
    // async tripTrend(ctx:Context,{userId}){
    //     const res =  await User.tripTrend(userId)
    //     ctx.response.body = res.dataValues
    // }

}