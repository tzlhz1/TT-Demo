import * as assert from 'assert'
import { toArray } from '../common/util'

import Router from './index'
export function get(...path: string[]):any {
    return addRouterDecorator(path, 'get')
}
export function post(...path: string[]):any {
    return addRouterDecorator(path, 'post')
}
export function all(...path: string[]):any {
    return addRouterDecorator(path, 'all')
}
export function put(...path: string[]):any {
    return addRouterDecorator(path, 'put')
}
export function del(...path: string[]):any {
    return addRouterDecorator(path, 'delete')
}

/**
 * 
 * @param {string} paths 
 * @param {string} method 
 * @returns
 */

function addRouterDecorator(paths: string[], method: string) {
    assert(paths.length > 0, 'paths is empty');
    assert(typeof method === 'string', 'method should be string');
    return (target: any, name: string, descriptor: PropertyDecorator): PropertyDecorator => {
        
        Router.routerSet.add({
            method: method,
            path: paths.map(p => p.toLowerCase()),
            middlewares: toArray(Reflect.get(target, name))
        })
        return descriptor
    }
}