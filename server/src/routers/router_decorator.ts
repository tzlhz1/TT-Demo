import * as assert from 'assert'
import { toArray } from '../common/util'
import {Context,Middleware} from 'koa'

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
    return (target: any, name: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
        Reflect.defineProperty(target,name,{
            value(...arg){
                const [ctx,] = arg
                return descriptor.value.apply(this,[ctx,ctx.request.body])
            }
        })//采用反射的方式设置Reflect.value 并对方法参数进行重写
        Router.routerSet.add({
            method: method,
            path: paths.map(p => p.toLowerCase()),
            middlewares: toArray(Reflect.get(target, name)) // 采用反射的方式获取Reflect.value
        })
        return descriptor
    }
}

/**
 * Content-Type验证
 *
 * @export
 * @param {string} contentType Content-Type
 * @returns
 */
export function allow(...contentTypes: string[]) {
    assert(contentTypes.length > 0, 'ContentType is empty');
  
    return middlewareDecorator((ctx: Context, next: Function) => {
      if (!ctx.is(contentTypes)) {
        throw new Error('不支持当前表单类型');
      }
      return next(1);
    });
  }

  /**
 * 中间件装饰器
 *
 * @param {Middleware} mw
 * @returns
 */
function middlewareDecorator(mw: Middleware) {
    return function(target: any, name: string, descriptor: PropertyDescriptor) {
      const values = toArray(mw, Reflect.get(target, name)); // 把中间件插入数组开头
      Reflect.set(target, name, values);
      return descriptor;
    };
  }