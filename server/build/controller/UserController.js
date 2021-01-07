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
const router = require("../routers/router_decorator");
const User_1 = require("../model/User");
class UserController {
    async login(ctx, { userName, passWord }) {
        const state = await User_1.User.login(userName, passWord);
        let body = {
            code: 200,
            data: state,
            msg: state ? '登陆成功' : '登陆失败'
        };
        ctx.body = body;
    }
    async getUser(ctx) {
        const res = await User_1.User.getUserById(Number(ctx.query.userId));
        ctx.response.body = res.dataValues;
    }
}
__decorate([
    router.post('/login'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    router.get('/getUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
exports.default = UserController;
