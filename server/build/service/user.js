"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const mysql_1 = require("../lib/mysql");
const types_1 = require("sequelize/types");
const userModel = mysql_1.sequelize.define('user', {
    userId: {
        type: types_1.INET,
        primaryKey: true,
    },
    userName: types_1.STRING(255),
    passWord: types_1.STRING(255),
});
userModel.sync();
const userSequelize = mysql_1.sequelize.import('user', () => userModel);
async function getUserById(userId) {
    const user = await userSequelize.findOne({ where: { userId } });
    return user;
}
exports.getUserById = getUserById;
