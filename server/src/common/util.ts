import {compact,concat} from 'loadsh'


export function toArray(...args){
    return compact(concat([],...args))
}