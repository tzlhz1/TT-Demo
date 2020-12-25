"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const app = new Koa();
exports.default = app.listen(3000, () => {
    console.log('3000-----');
});
