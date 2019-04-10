import { call, put, takeEvery, takeLatest,select,all } from 'redux-saga/effects';

import {getData} from '../service';

let delay = (time)=>new Promise(resolve=>setTimeout(resolve,time));

function* addToCar(action){
    console.log('添加购物车');
    try{
        let goods = yield call(getData,'/api/cart',{page:1,qty:10});//getData('/api/cart',{page:1,qty:10})
        yield put({ type: 'ADD_TO_CART',payload:goods});//等效小dispatch({type})
    }catch(err){
        yield put({type:'ADD_TO_CART_FAIL'})
    }
    
 
    // 获取state
    let state = select();//等效于store.getState()

    console.log('添加成功')
}

// function* initToCar(action){
//     console.log('修改购物车数量');
//     try{
//         let goods = yield call(getData,'http://localhost:3001/cart',{ type:'CheckAll'});//getData('/api/cart',{page:1,qty:10})
//         console.log('goods',goods)
//         yield put({ type: 'CHANGE_QTY',payload:goods});//等效小dispatch({type})
//     }catch(err){
//         yield put({type:'CHANGE_QTY_FAIL'})
//     }  

    // 获取state
    // let state = select();//等效于store.getState()

    // console.log('修改成功')
// }
 

// 监听action
function* watchAddToCar(){
    yield takeLatest('ADD_TO_CART_ASYNC',addToCar);
}
function* watchGetData(){
    yield takeLatest('CHANGE_QTY_ASYNC',addToCar);
}

export default function* rooSaga(){
    yield all([watchAddToCar(),watchGetData()])
}