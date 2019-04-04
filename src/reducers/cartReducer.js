/**
 * Cart Reducer
 * 关于购物车的规则
 */
import axios from 'axios'
import {ADD_TO_CART,REMOVE_FROM_CART,CHANGE_QTY,CLEAR_CART} from '../actions/cartAction'

// 初始状态
let initState = {
    cartlist:[]
}
// state的修改逻辑
let reducer = (state=initState,{type,payload})=>{
    console.log('2222222222',type,payload,state)
    // state: 上一次的状态
    // action: 修改指令
    // 返回值：返回新的state
    switch(type){
        // 添加商品到购物车
        case ADD_TO_CART:
            return {
                ...state,
                cartlist:[...state.cartlist,payload]
            }

        // 删除购物车商品
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartlist:state.cartlist.filter(item=>item.goods_id!=payload.id)
            }
        
        // 修改购物车商品数量
        case CHANGE_QTY:
            return {
                ...state,
                cartlist:state.cartlist.map(goods=>{
                    console.log(111222)
                    if(goods.goods_id === payload.id){
                        console.log('mememe',goods.qty)
                        goods.goods_qty = payload.qty
                    }
                    return goods;
                })
            }
        
            // 清空购物车
        case CLEAR_CART:
            return {
                ...state,
                cartlist:[]
            }

        default:
            return state;
    }
}

export default reducer;

