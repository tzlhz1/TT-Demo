import {Sequelize} from 'sequelize-typescript'
import {db} from '../config'
import * as path from 'path'
const sequelize = new Sequelize(db as any)

try {
     sequelize.authenticate().then(res=>{
        console.log('连接成功');
        sequelize.addModels([path.resolve(__dirname,'../model/')]) //初始化模型
     });
} catch (error) {
    console.error('Unable to connect to the database:', error);
}