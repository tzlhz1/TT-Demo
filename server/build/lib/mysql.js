"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const Sequelize = require("sequelize");
const config_1 = require("../config");
exports.sequelize = new Sequelize.Sequelize(config_1.db);
try {
    exports.sequelize.authenticate().then(res => {
        console.log('连接成功');
    });
}
catch (error) {
    console.error('Unable to connect to the database:', error);
}
