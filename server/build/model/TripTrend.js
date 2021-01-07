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
exports.TripTrend = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let TripTrend = class TripTrend extends sequelize_typescript_1.Model {
    //历史列表接口
    static async getTripTrend(userId) {
        const result = await this.findAll({ where: { userId } });
        // return result.map(res => ({
        //     ...res, trajectory: JSON.parse(res.trajectory), 
        //     startCode: res.startCode?.split(',')||res.startCode,
        //     endCode: res.endCode?.split(',')||res.endCode
        // }))?.reverse()
        return result;
    }
    // 出行总公里数
    static async allDistance() {
    }
};
__decorate([
    sequelize_typescript_1.Column({
        primaryKey: true
    }),
    __metadata("design:type", Number)
], TripTrend.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], TripTrend.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], TripTrend.prototype, "type", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], TripTrend.prototype, "tripType", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], TripTrend.prototype, "distance", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], TripTrend.prototype, "date", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], TripTrend.prototype, "time", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], TripTrend.prototype, "trajectory", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], TripTrend.prototype, "Calorie", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], TripTrend.prototype, "speed", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], TripTrend.prototype, "price", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], TripTrend.prototype, "startPlace", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], TripTrend.prototype, "endPlace", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], TripTrend.prototype, "startCode", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], TripTrend.prototype, "endCode", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], TripTrend.prototype, "mark", void 0);
TripTrend = __decorate([
    sequelize_typescript_1.Table({
        tableName: 'trip_data'
    })
], TripTrend);
exports.TripTrend = TripTrend;
