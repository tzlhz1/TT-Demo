"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allow = exports.del = exports.put = exports.all = exports.post = exports.get = void 0;
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
        Reflect.defineProperty(target, name, {
            value(...arg) {
                const [ctx,] = arg;
                return descriptor.value.apply(this, [ctx, ctx.request.body]);
            }
        }); //采用反射的方式设置Reflect.value 并对方法参数进行重写
        index_1.default.routerSet.add({
            method: method,
            path: paths.map(p => p.toLowerCase()),
            middlewares: util_1.toArray(Reflect.get(target, name)) // 采用反射的方式获取Reflect.value
        });
        return descriptor;
    };
}
/**
 * Content-Type验证
 *
 * @export
 * @param {string} contentType Content-Type
 * @returns
 */
function allow(...contentTypes) {
    assert(contentTypes.length > 0, 'ContentType is empty');
    return middlewareDecorator((ctx, next) => {
        if (!ctx.is(contentTypes)) {
            throw new Error('不支持当前表单类型');
        }
        return next(1);
    });
}
exports.allow = allow;
/**
* 中间件装饰器
*
* @param {Middleware} mw
* @returns
*/
function middlewareDecorator(mw) {
    return function (target, name, descriptor) {
        const values = util_1.toArray(mw, Reflect.get(target, name)); // 把中间件插入数组开头
        Reflect.set(target, name, values);
        return descriptor;
    };
}
