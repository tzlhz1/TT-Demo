
import {DB} from './config'

export const db:DB = {
    database:'trip',
    username:'tzlhz1',
    password:'Zhuo10000..',
    host:'47.106.104.83',
    port:3006,
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        idle:1000
    },
    logging:false
}

export const port:number = 8002;