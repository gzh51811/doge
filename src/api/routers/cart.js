const Router = require('koa-router');
const db = require('../db');
// const ObjectID = require('mongodb').ObjectID;

// 创建路由
var router = new Router();

router.get('/',async (ctx,next)=>{
    ctx.set("Access-Control-Allow-Origin","*")
    // 解构
    // console.log(ctx.query);
    let res=''
    if(ctx.query.type === 'CheckAll'){
        res = await db.find('cartlist',{})
    } 
    else if(ctx.query.type === 'ChangeCartQty'){
        let {goods_id,goods_qty} = ctx.query;
        // console.log('qty',goods_id,goods_qty);
        let data={"goods_qty":goods_qty*1}
        // console.log('data',data)
        res = await db.update('cartlist',{"goods_id":goods_id},{$set:data});
        // console.log(1111)
    }
    else if(ctx.query.type === 'RemoveGoods'){
        let {goods_ids} = ctx.query;
        // console.log('ids:',goods_ids);
        goods_ids = JSON.parse(goods_ids)
        for(let i=0;i<goods_ids.length;i++){
            res = await db.delete('cartlist',{"goods_id":goods_ids[i]});
        }
    }
    
    // console.log(res)
    ctx.body = res;
})

module.exports = router;