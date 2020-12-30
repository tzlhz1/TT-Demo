"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.put = exports.all = exports.post = exports.get = void 0;
const assert = require("assert");
const util_1 = require("../common/util");
const index_1 = require("./index");
function get(...path) {
    return addRouterDecorator(path, 'get');
}
exports.get = get;
function post(...path) {
    return addRouterDecorator(path, 'post');
}
exports.post = post;
function all(...path) {
    return addRouterDecorator(path, 'all');
}
exports.all = all;
function put(...path) {
    return addRouterDecorator(path, 'put');
}
exports.put = put;
function del(...path) {
    return addRouterDecorator(path, 'delete');
}
exports.del = del;
/**
 *
 * @param {string} paths
 * @param {string} method
 * @returns
 */
function addRouterDecorator(paths, method) {
    assert(paths.length > 0, 'paths is empty');
    assert(typeof method === 'string', 'method should be string');
    return (target, name, descriptor) => {
        index_1.default.routerSet.add({
            method: method,
            path: paths.map(p => p.toLowerCase()),
            middlewares: util_1.toArray(Reflect.get(target, name))
        });
        return descriptor;
    };
}
