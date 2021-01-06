
import { Column, Model, Table } from 'sequelize-typescript'

@Table({
    tableName:'user'
})
export class User extends Model<User>{
    @Column({
        primaryKey:true,
    })
    userId:number

    @Column
    userName:string

    @Column
    passWord:string

    static async getUserById(userId:number):Promise<any>{
        return this.findOne({where:{userId}})
    }
    static async login(userName:string,passWord:string):Promise<any>{
        const user = await this.findOne({where:{userName,passWord}})
        return Boolean(user)
    }
}