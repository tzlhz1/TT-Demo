
import {DB} from './config'

export const db:DB = {
    database:'trip',
    username:'tzlhz1',
    password:'Zhuo10000..',
    host:'47.106.104.83',
    port:3306,
    dialect:'mysql',
    logging:false,
    define: {
        timestamps: false
    }
}

export const port:number = 8002;