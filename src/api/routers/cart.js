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
    if(ctx.query.type == 'CheckAll'){
        res = await db.find('cartlist',{})
    }
    
    // console.log(res)
    ctx.body = res;
})

module.exports = router;