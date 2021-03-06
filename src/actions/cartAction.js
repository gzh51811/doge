/**
 * Action creator
 */

//  编写常量，用于规范type
export const INIT_TO_CART = 'INIT_TO_CART'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const CHANGE_QTY = 'CHANGE_QTY'
export const CLEAR_CART = 'CLEAR_CART'

export function initcar(initdata){
    return {
        type:INIT_TO_CART,
        payload:initdata
    } 
}
export function add(goods){
    return {  
        type:ADD_TO_CART, 
        payload:goods
    }
}

export function remove(id){
    return {
        type:REMOVE_FROM_CART,
        payload:{id}
    }
}

export function changeqty(id,qty){
    // console.log('id:',id,'qty:',qty)
    return {
        type:CHANGE_QTY,
        payload:{id,qty}
    }
}

export function clear(){
    return {
        type:CLEAR_CART
    }
}


export default {
    add,
    remove,
    changeqty,
    clear,
    initcar,
}