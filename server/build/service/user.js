"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let User = class User extends sequelize_typescript_1.Model {
    static async getUserById(userId) {
        console.log(this.findOne);
        return this.findOne({ where: { userId } });
    }
};
__decorate([
    sequelize_typescript_1.Column({
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], User.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "passWord", void 0);
User = __decorate([
    sequelize_typescript_1.Table({
        tableName: 'user'
    })
], User);
exports.User = User;
// export default User
//  const userModel = sequelize.define('user', {
//     userId: { 
//         type: INET, 
//         primaryKey: true, 
//     },
//     userName: STRING(255),
//     passWord: STRING(255),
// })
// userModel.sync()
// const userSequelize = sequelize.import('user',()=>userModel)
// export async function getUserById(userId: number) {
//    const user = await userSequelize.findOne({where:{userId}})
//    return user
// }   
