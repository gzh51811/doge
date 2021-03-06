/**
 * Cart Reducer
 * 关于购物车的规则
 */
import {INIT_TO_CART,ADD_TO_CART,REMOVE_FROM_CART,CHANGE_QTY,CLEAR_CART} from '../actions/cartAction'
 

// 初始状态
let initState = {
    cartlist:[]
}
// state的修改逻辑
let reducer = (state=initState,{type,payload})=>{
    // console.log('lalala',type,payload)
    // state: 上一次的状态
    // action: 修改指令 
    // 返回值：返回新的state
    switch(type){
        //初始化
        case INIT_TO_CART: 
        return {
            ...state, 
            cartlist:payload, 
        } 
        // 添加商品到购物车 
        case ADD_TO_CART:
            return {
                ...state, 
                cartlist:[...state.cartlist,payload]
            }

        // 删除购物车商品
        case REMOVE_FROM_CART:
            // console.log()
            return {
                ...state,
                cartlist:state.cartlist.filter(item=>{
                    let isok = [];
                    for(let i=0;i<payload.id.length;i++){
                        // console.log('i',payload.id[i])
                        if(item.goods_id != payload.id[i]){
                            // console.log('item',item)
                            isok[i]=false;
                        }else{
                            isok[i]=true;
                        }
                        
                    }
                    return !(isok.some((yes)=> yes))
                })
            }
        
        // 修改购物车商品数量
        case CHANGE_QTY:
            // console.log('11',payload.qty,typeof(payload.qty))
            // if(typeof(payload.qty) == 'object'){
            //     payload.qty = ''
            // }
            return {
                ...state,
                cartlist:state.cartlist.map(goods=>{
                    // console.log(111222,payload)
                    if(goods.goods_id === payload.id){
                        // console.log('mememe',payload.id,payload.qty)
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

