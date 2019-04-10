const Router = require('koa-router');
const db = require('../db');
// const ObjectID = require('mongodb').ObjectID;

// 创建路由
var router = new Router();

router.post('/',async (ctx,next)=>{
    ctx.set("Access-Control-Allow-Origin","*");
    let {goods_id,goods_price,goods_name,goods_imgurl,goods_qty}=ctx.request.body
    console.log(goods_id,goods_price,goods_name,goods_imgurl,goods_qty);
    // 解构
    let insertres=await db.insert('cartlist',{goods_id,goods_price,goods_name,goods_imgurl,goods_qty});
   console.log(insertres);
    ctx.body = {
      "code": 0
      ,"msg": "插入成功"
    } 
})

module.exports = router;