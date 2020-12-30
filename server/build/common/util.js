"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toArray = void 0;
const loadsh_1 = require("loadsh");
function toArray(...args) {
    return loadsh_1.compact(loadsh_1.concat([], ...args));
}
exports.toArray = toArray;
