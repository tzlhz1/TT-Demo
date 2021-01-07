
import { Column, Model, Table } from 'sequelize-typescript'

@Table({
    tableName: 'trip_data'
})
export class TripTrend extends Model<TripTrend>{
    @Column({
        primaryKey: true
    })
    id: number

    @Column
    userId: number

    @Column
    type: string

    @Column
    tripType: string

    @Column
    distance: string

    @Column
    date: string

    @Column
    time: string

    @Column
    trajectory: string

    @Column
    Calorie: string

    @Column
    speed: string

    @Column
    price: string

    @Column
    startPlace: string

    @Column
    endPlace: string

    @Column
    startCode: string

    @Column
    endCode: string

    @Column
    mark: string
    //历史列表接口
    static async getTripTrend(userId: number) {
        const result = await this.findAll({ where: { userId } })
        // return result.map(res => ({
        //     ...res, trajectory: JSON.parse(res.trajectory), 
        //     startCode: res.startCode?.split(',')||res.startCode,
        //     endCode: res.endCode?.split(',')||res.endCode
        // }))?.reverse()
        return result
    }

    // 出行总公里数
    static async allDistance(){

    }

}