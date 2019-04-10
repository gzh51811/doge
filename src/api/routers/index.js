const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

// 创建路由
var router = new Router();

// 引入页面路由

const loginRouter = require('./login');
const tokenverifyRouter = require('./tokenverify');
const cartRouter = require('./cart');
const goodslistRouter = require('./goodslist');
const listdetailRouter = require('./listDetail.js');
const addtocartRouter = require('./addtocart.js');
const regRouter = require('./reg');



let url = '';
router.use('/', koaBody({
    // 支持formdata
    multipart: true,

    // 文件支持
    formidable: {
        // 指定保存路径
        uploadDir: './img',
        keepExtensions: true,
        // 改文件名
        onFileBegin(filename, file) {
            // filename: 上传文件的原始名
            // file:文件信息对象
            //   * path:
            // console.log(file.path)
            url = file.path;
            // file.path = './images/' + filename;
        }
    }
}));

router.use('/login',loginRouter.routes());
router.use('/tokenverify',tokenverifyRouter.routes());
router.use('/cart',cartRouter.routes());
router.use('/goodslist',goodslistRouter.routes());
router.use('/listdetail',listdetailRouter.routes());
router.use('/addtocart',addtocartRouter.routes());
router.use('/reg',regRouter.routes());


module.exports = router;