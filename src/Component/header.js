import React  from 'react';
import '../assests/css/header.css';

// header-quick header-quicknew Jtk
// style={{display:isshow}}

let Xhead =({isshow,istrue})=>{
    // isshow  'header-quick', 'header-quicknew', 'Jtk',  

    return (
        <div className={[istrue?"afterchangeheader":"boforechangeheader"].join(' ')} >
            <a href="https://wap.epet.com/">
                <span className="icon1"></span>
                <p>首页</p>
            </a>
            <a href="https://wap.epet.com/category.html">
                <span className="icon2"></span>
                <p>商品分类</p>
            </a>
            <a href="https://wap.epet.com/cart/">
                <span className="icon4" id="getCartNum"></span>
                <p >购物车</p>
            </a>
            <a href="https://wap.epet.com/app/user">
                <span className="icon5"></span>
                <p>我的e宠</p>
            </a>
        </div>
    )
}

export default Xhead;