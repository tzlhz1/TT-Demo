import { Context } from 'koa';

export function response(ctx:Context,data:any,msg:string="success",code:number=200){
    ctx.body = {
        data,
        code,
        msg
    }
}