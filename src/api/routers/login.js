 
const Router = require('koa-router');
const db = require('../db');
const token = require('./utils/token');
const ObjectID = require('mongodb').ObjectID;
// 创建路由
var router = new Router();


router.post('/',async (ctx,next)=>{
    ctx.set("Access-Control-Allow-Origin","*");
    // 解构
    console.log(ctx.request.body);
    let {user,password}=ctx.request.body;
    // console.log(user,password);
 
    let res = await db.find('users',{"user":user,"password":password});
    // console.log(res,new Date().getTime());

    if(res.length>0){
        // 登录成功：发令牌
        let _token = token.create(user);
        ctx.body = {
            code:200,
            uname:user,
            token:_token
        }
    }
    else{
        ctx.body = {
            code:100,
            msg:'用户名或密码有误'
        }
    } 

});


module.exports = router;