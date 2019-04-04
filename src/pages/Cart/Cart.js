import React,{Component}  from 'react';
import Xhead from '../../Component/header';
import withAxios from '../../hoc/withAxios';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import cartAction from '../../actions/cartAction';



class Cart extends Component{
    constructor (){
        super();
        this.state={
            cartlist:[],
            showMore:true
        }
    }
    handleClick(){
        this.props.history.goBack(); 
    }
    isShow(){
        this.setState({
            showMore : !this.state.showMore
        })
        
    }
    componentWillMount(){
        // console.log('this',this.props) 
        // this.props.axios.get('http://localhost:3001/cart',{
        //     params:{
        //         type:'CheckAll'
        //     }
        // }).then((res)=>{
        //     console.log(res)
            
        //     this.setState({
        //         cartlist:res.data
        //     })
        // })
    }
    
    render(){
        let {cartlist} = this.state;
        let {cartlist1,total,changeqty,remove,clear} = this.props;
        console.log("mycartlist",cartlist)
        return (
            <div style={{height:"100%"}}>
                {/* head */}
                <div className="wap-top-bar hide" style={{display: "block"}}>
                    <header className="ftc head-top bgfff zcolor rela">
                        <div className="">
                        <a href="javascript:void(0)" className="aback page-top go-back left-more" onClick={this.handleClick.bind(this)}></a>
                        <span className="ft18 topbar-title">购物车</span>
                        <div className="zfont ft16 block">
                            <a className="zcolor topbar-link " href="javascript:;"> 编辑 </a>
                        </div>
                        <span className="mla pull-right Jbur ml J_bur right-more" onClick={this.isShow.bind(this)}></span>
                        </div>
                    </header>                   
                    <Xhead {...this.state}></Xhead>
                    
                </div>
        
                {/* main */}
                <div id="CartBox">
                    <div className="mycart" data-reactid=".0">
                        <div data-reactid=".0.0">                            
                            <div className="mycart-li mt bgfff">
                                <div className="checkbox-order1 overflow">
                                {
                                    cartlist.map((item,idx)=>{
                                        return (
                                            <div className="checkbox mycart-pro pl"  key={idx}>
                                                <input type="checkbox" defaultValue="145844" name="goods"/>
                                                <div className="cart-proli pb10">
                                                    <div className="spli1 rela">
                                                        <div className="cart-img rela overflow loadimg-fixed">
                                                            <a href="javascript:;" className="block">
                                                                <img src={require('../../asset/cart/' + item.goods_imgurl)} className="image"/>
                                                            </a>
                                                        </div>
                                                        <div className="cart-font pr">
                                                            <h1 className="c333">
                                                                <a href="javascript:;" className="block">
                                                                    <span className="identity">
                                                                        <img src="https://static.epetbar.com/static_web/wap/src/images/cart/noCargo.png"/>
                                                                    </span>
                                                                    <span>{item.goods_name}</span>
                                                                </a>
                                                            </h1>
                                                            <div className="mt c89">
                                                                <b className="mr3">
                                                                    <span className="ft12" >¥</span>
                                                                    <span className="ft15">{item.goods_price.toFixed(2)}</span>
                                                                </b>
                                                                <div className="buynum-wrap clearfix fr">
                                                                    <span className="fl subnum bold no">─</span>
                                                                    <div className="text buynum ftc fl cart_buynum_txt">
                                                                        <input type="text" defaultValue={item.goods_qty} size="2" onChange={changeqty.bind(this,item.goods_id,item.goods_qty)}/>
                                                                    </div>
                                                                    <span className="fl addnum ft18" onClick={changeqty.bind(this,item.goods_id)}>+</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) 
                                    })
                                }
                                <div className="delete-pro cfff ft15">
                                    <div className="move-del">
                                        <div className="move-delfont">
                                            删除
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                              
                            
                            {/* 总价 */}
                            <div className="cart-float">
                                <div className="cart-footer bgfff clearfix pad10 cart-twocenter">
                                    <div className="checkbox all-price fl">
                                        <input type="checkbox" defaultValue="0" name="order" id="checkAllGoods"/>
                                        <div className="c666">
                                            <label>
                                                <span className="ft14">总额：</span>
                                                <b className="ft14 cred">
                                                    <span>¥</span>
                                                    <span>0.00</span>
                                                </b>
                                            </label>
                                        </div>
                                        <div className="c666 ft12"></div>
                                    </div>
                                    <div className="no-buy fr ftc">
                                        <a href="javascript:;" className="afff ft14">
                                            <span>去结算(</span>
                                            <span>2</span>
                                            <span>)</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="chooseaddbg hide" data-reactid=".0.1"></div>
                        <div className="chooseadd hide" data-reactid=".0.2">
                            <p className="addtext" data-reactid=".0.2.0">
                                收货地址
                            </p>
                            <ul className="choose" data-reactid=".0.2.1">
                                <li className="handcur tab1 now" data-reactid=".0.2.1.0">请选择
                                </li>
                                <li className="handcur tab2 hide" data-reactid=".0.2.1.1">请选择
                                </li>
                                <li className="handcur tab3 hide" data-reactid=".0.2.1.2">请选择
                                </li>
                                <li className="handcur tab4 hide" data-reactid=".0.2.1.3">请选择
                                </li>
                                <li className="handcur tab5 hide" data-reactid=".0.2.1.4">请选择
                                </li>
                            </ul>
                            <div className="address" data-reactid=".0.2.2">
                                <ul className="chooseone" data-reactid=".0.2.2.0"></ul>
                                <ul className="choosetwo" data-reactid=".0.2.2.1"></ul>
                                <ul className="choosethree" data-reactid=".0.2.2.2"></ul>
                                <ul className="choosefour" data-reactid=".0.2.2.3"></ul>
                                <ul className="choosefive" data-reactid=".0.2.2.4"></ul>
                            </div>
                            <div className="addclose handcur" data-reactid=".0.2.3"></div>
                        </div>
                        <div className="addresslist hide" data-reactid=".0.3">
                            <p className="addtext" data-reactid=".0.3.0">
                                收货地址
                            </p>
                            <ul data-reactid=".0.3.1"></ul>
                            <p className="handcur choseother" data-reactid=".0.3.2">
                                选择其他配送区域
                            </p>
                            <div className="addclose handcur" data-reactid=".0.3.3"></div>
                        </div> */}
                    </div>
                </div>
            </div>
            )
    }
}
Cart = connect(
    state=>({
        cartlist:state.cart.cartlist,
        // total:state.cartlist.reduce((prev,current)=>prev+current.goods_price*current.qty,0)
    }),
    dispatch=>bindActionCreators(cartAction,dispatch) //实现了bindActionCreators方法绑定action到组件的操作
)(Cart)
Cart = withAxios(Cart)
export default Cart;