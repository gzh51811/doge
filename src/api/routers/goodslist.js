const Router = require('koa-router');
const db = require('../db');
// const ObjectID = require('mongodb').ObjectID;

// 创建路由
var router = new Router();

router.get('/',async (ctx,next)=>{
    ctx.set("Access-Control-Allow-Origin","*")
    // 解构
    // console.log(ctx.query);
    let listdata=await db.find('goodslist',{});
   
    ctx.body = {
                  "code": 0
                  ,"msg": "请求成功"
                  ,"data":listdata
                } ;
    })

module.exports = router;