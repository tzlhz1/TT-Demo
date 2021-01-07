import * as router  from '../routers/router_decorator'
import { Context } from 'koa';
import {TripTrend} from '../model/TripTrend'

export default class TripTrendController{
    @router.post('/getTripTrend')
    async getTripTrend(ctx:Context,{userId}){
        console.log(userId)
        const res =  await TripTrend.getTripTrend(userId)
        console.log('res===>',res)
        ctx.body = res
    }
}