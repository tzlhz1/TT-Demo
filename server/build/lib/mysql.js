"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const config_1 = require("../config");
const sequelize = new Sequelize.Sequelize(config_1.db);
try {
    sequelize.authenticate().then(res => {
        console.log('连接成功');
    });
}
catch (error) {
    console.error('Unable to connect to the database:', error);
}
