import * as Koa from 'koa';

const app = new Koa()
app.use(async (ctx,next)=>{
    try {
        await next()
    } catch (error) {
        console.log(error)
    }
})
app.on('error',err=>{
    console.log(err)
})
export default app.listen(3000,()=>{
    console.log('3000-----')
})