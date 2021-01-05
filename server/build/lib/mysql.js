"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = require("../config");
const path = require("path");
const sequelize = new sequelize_typescript_1.Sequelize(config_1.db);
try {
    sequelize.authenticate().then(res => {
        console.log('连接成功');
        sequelize.addModels([path.resolve(__dirname, '../model/')]); //初始化模型
    });
}
catch (error) {
    console.error('Unable to connect to the database:', error);
}
