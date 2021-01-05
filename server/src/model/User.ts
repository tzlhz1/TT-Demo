
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
        console.log(this.findOne)
        return this.findOne({where:{userId}})
    }
}