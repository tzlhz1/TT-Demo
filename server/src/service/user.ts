import User from '../model/User'
import { sequelize } from '../lib/mysql'
import { INET, STRING } from 'sequelize/types'

 const userModel = sequelize.define('user', {
    userId: { 
        type: INET, 
        primaryKey: true, 
    },
    userName: STRING(255),
    passWord: STRING(255),
})
userModel.sync()
const userSequelize = sequelize.import('user',()=>userModel)

export async function getUserById(userId: number) {
   const user = await userSequelize.findOne({where:{userId}})
   return user
}   