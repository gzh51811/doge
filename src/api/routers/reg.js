const Router = require('koa-router');
const db = require('../db');
const token = require('./utils/token');
// 创建路由
var router = new Router();


router.post('/',async (ctx,next)=>{
    // 解构    
    ctx.set('Access-Control-Allow-Origin','*')
    // console.log('22',ctx.request.body);
    let {user,pwd} = ctx.request.body    
    // let {"phone":tel,password} = ctx.request.body;
    let res = await db.find('users',{"user":user});
    // console.log(res);
    res = res[0];
    if(!res){
        let res1 = await db.insert('users',{"user":user,"password":pwd});
        ctx.body = {
            code:200,
            msg:'注册成功'
        }       
    }else{
        ctx.body = {
            code:100,
            msg:'用户名已存在'
        }
    } 
    // ctx.body = res
});


module.exports = router;