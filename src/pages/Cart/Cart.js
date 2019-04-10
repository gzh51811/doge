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
            showMore:true,
            showEdit:true,
            totalQty:0,
            totalSelect:[],
            CheckAll:false,
        }
    }
    handleBackClick(){
        this.props.history.goBack(); 
    }
    isShow(){ 
        this.setState({
            showMore : !this.state.showMore
        })
        
    }
    handleEdit(){
        this.setState({
            showEdit : !this.state.showEdit
        })
    }
        
    //商品选中与全选
    handleCheck(idx){
        let {mycartlist,changeqty} = this.props;
        let {goods_qty,goods_id} = mycartlist[idx];
        let index = this.state.totalSelect.indexOf(idx);
        // console.log(idx,index,this.state.totalSelect)
        if(index>=0){
            // 如果当前已勾选，则取消勾选
            let arr = [...this.state.totalSelect]
            arr.splice(index,1)
            this.setState({
                totalSelect: arr
            },()=>{
                // console.log(this.state.totalSelect)
                if(mycartlist.length === this.state.totalSelect.length){
                    this.setState({
                        CheckAll: true,
                    })
                }else{
                    this.setState({
                        CheckAll: false,
                    }) 
                }
            })
        }else{
            let brr = [...this.state.totalSelect]
            brr.push(idx)
            this.setState({
                totalSelect:brr
            },()=>{
                // console.log(this.state.totalSelect)
                if(mycartlist.length === this.state.totalSelect.length){
                    this.setState({
                        CheckAll: true,
                    },()=>{
                        // console.log(this.state.CheckAll)
                    })
                }else{
                    this.setState({
                        CheckAll: false,
                    },()=>{
                        // console.log(this.state.CheckAll)
                    }) 
                }  
            })       
        }       
    }
    handleAll(e){
        let {mycartlist} = this.props;
        this.setState({
            CheckAll: !this.state.CheckAll,
        },()=>{
            if(this.state.CheckAll){
                this.setState({
                    totalSelect:mycartlist.map((item,idx)=>idx)
                })
            }else{
                this.setState({
                    totalSelect:[]
                })
            }
        })      
    }
    
    
    
    // 商品数量的增减
    handleAddNum(idx){
        let {mycartlist,changeqty} = this.props;
        // console.log('mycartlist',mycartlist)
        let {goods_qty,goods_id} = mycartlist[idx];
        goods_qty++;        
        this.props.axios.get('http://localhost:3001/cart',{
            params:{
                type:'ChangeCartQty',
                goods_id,
                goods_qty,
            }
        }).then((res)=>{ 
                   
        })   
        changeqty(goods_id,goods_qty);
    }
    handleReduceNum(idx){
        let {mycartlist,changeqty} = this.props;
        let {goods_qty,goods_id} = mycartlist[idx];
        if(goods_qty>1){
            goods_qty--;
        }else if(goods_qty <= 1){
            goods_qty = 1;
        } 
        changeqty(goods_id,goods_qty);
    }
    handleChangeNum(idx,e){
        let {mycartlist,changeqty} = this.props;
        let {goods_qty,goods_id} = mycartlist[idx].goods_qty;
        // console.log(e.target)
        // if(goods_qty>1){
        //     goods_qty--;
        // }else if(goods_qty <= 1){
        //     goods_qty = 1;
        // }
        changeqty(goods_id,goods_qty);
    }

    // // 删除商品
    handleDelete(){
        let {mycartlist,remove} = this.props;
        let my_goods_ids = (this.state.totalSelect.map(item=>mycartlist[item].goods_id));
        let goods_ids = JSON.stringify(my_goods_ids)

        console.log('1111',my_goods_ids)
        this.props.axios.get('http://localhost:3001/cart',{
            params:{
                type:'RemoveGoods',
                goods_ids,
            }
        }).then((res)=>{         
        })          
        remove(this.state.totalSelect.map(item=>mycartlist[item].goods_id))
        this.setState({
            totalSelect:[],
            CheckAll:false
        })

        
    }
    componentWillMount(){       
        this.props.axios.get('http://localhost:3001/cart',{
            params:{
                type:'CheckAll'
            }
        }).then((res)=>{
            // console.log(res)            
            this.props.initcar(res.data)             
        })
    }

    // componentDidMount(){
    //     // console.log('this',this.props)
    // }
    
    render(){
        let showselect = this.state.CheckAll
        let {mycartlist,changeqty} = this.props;
        let res = 0;
        let myGoods = 0;
        
        (this.state.totalSelect).forEach((item)=>{
            if(mycartlist[item]){
                res += mycartlist[item].goods_price * mycartlist[item].goods_qty
                myGoods += mycartlist[item].goods_qty
            }   
        })

        return (
            <div style={{height:"100%"}}>
                {/* head */}
                <div className="wap-top-bar hide" style={{display: "block"}}>
                    <header className="ftc head-top bgfff zcolor rela">
                        <div className="">
                        <a href="javascript:void(0)" className="aback page-top go-back left-more" onClick={this.handleBackClick.bind(this)}></a>
                        <span className="ft18 topbar-title">购物车</span>
                        <div className="zfont ft16 block">
                            <span className="zcolor topbar-link" href="javascript:;" onClick={this.handleEdit.bind(this)}> {this.state.showEdit ? '编辑' :'完成'} </span>
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
                                    mycartlist.map((item,idx)=>{
                                        return (
                                            <div className="checkbox mycart-pro pl"  key={idx}>
                                                <input type="checkbox" defaultValue="145844" name="goods" checked={mycartlist.every(()=>this.state.totalSelect.includes(idx))} onChange={this.handleCheck.bind(this,idx)}/>
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
                                                                    <span className="fl subnum bold no" onClick={this.handleReduceNum.bind(this,idx)}>─</span>
                                                                    <div className="text buynum ftc fl cart_buynum_txt">
                                                                        <input type="text" size="1" value={item.goods_qty} onChange={changeqty.bind(this,item.goods_id)}/>
                                                                    </div>
                                                                    <span className="fl addnum ft18" onClick={this.handleAddNum.bind(this,idx)}>+</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) 
                                    })
                                }
                            </div>
                        </div>                              
                            
                            {/* 总价 */}
                            <div className="cart-float">
                                <div className="cart-footer bgfff clearfix pad10 cart-twocenter">
                                    <div className="checkbox all-price fl">
                                        <input type="checkbox" defaultValue="0" name="order" id="checkAllGoods" checked={showselect} onChange={this.handleAll.bind(this)}/>
                                        <div className="c666">
                                            <label>
                                                <span className="ft14">总额：</span>
                                                <b className="ft14 cred">
                                                    <span>¥</span>
                                                    <span>{res>0 ? res.toFixed(2) : 0.00}</span>
                                                </b>
                                            </label>
                                        </div>
                                        <div className="c666 ft12"></div>
                                    </div>
                                    <div className={["fr","ftc",myGoods>0 ? "go-buybtn":"no-buy"].join(' ')}>
                                        <a href="javascript:;" className="afff ft14">
                                            <span>去结算(</span>
                                            <span>{myGoods}</span>
                                            <span>)</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            {/* 删除 */}
                            <div className={["cart-float", this.state.showEdit && "hide"].join(' ')}>
                                <div className="cart-footer bgfff clearfix pad10 cart-twocenter">
                                    <div className="checkbox all-price fl">
                                        <input type="checkbox" value="-1" name="order" id="checkAllGood" checked={showselect} onChange={this.handleAll.bind(this)}/>
                                        <label htmlFor="checkAllGood">
                                            <p className="c666 ft14">全选</p>
                                        </label>
                                    </div>
                                    <div>
                                        <div className="delete fr ftc ml">
                                            <a href="javascript:;" className="ft14" onTouchEnd={this.handleDelete.bind(this)}>
                                                <span>删除（</span>
                                                <span>{this.state.totalSelect.length}</span>
                                                <span>）</span>
                                            </a>
                                        </div>
                                        <div className="move-ctrld fr ftc">
                                            <a href="javascript:;" className="ft14">移入收藏</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* 弹窗 */}
                <div id="alertdiv" className="overlay hide" style={{ zIndex:"99999",left: "0px"}}>
                    <div className="phone-alert">
                        <div className="phone-alert-panel" style={{boxShadow:" 0 0 0 0 #CCC",padding:"0em"}}>
                            <div className="phone-alert-content">确定删除选中商品吗？</div>
                                <div className="confirm_cont">
                                    <a href="javascript:void(0);" className="pbtn confirm_pbtn yellow_pbtn" id="confirmTag">确定</a>
                                    <a href="javascript:void(0);" className="pbtn confirm_pbtn" id="cancelTag">取消</a>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            )
    }
}

Cart = connect(
    state=>{  
        return {
            mycartlist : state.cart.cartlist,
        }      
    },
    dispatch=>bindActionCreators(cartAction,dispatch) //实现了bindActionCreators方法绑定action到组件的操作
)(Cart)

 

Cart = withAxios(Cart)
export default Cart;

