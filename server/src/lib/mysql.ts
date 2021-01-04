import * as Sequelize from 'sequelize'
import {db} from '../config'

export const sequelize = new Sequelize.Sequelize(db as any)
try {
     sequelize.authenticate().then(res=>{
        console.log('连接成功');
     });
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

 