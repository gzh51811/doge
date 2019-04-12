import React,{Component}  from 'react';
import  './Details.css';
import {Carousel,Button, notification} from 'antd';

import  Detailheader from '../../Component/header.js';
import { withRouter } from 'react-router-dom';
import withAxios from '../../hoc/withAxios.js';



class Details extends Component {
    constructor(){
        super();
        this.state={
            currentimg:'',
            isok:false,
            currentstatus:'none',
            data:[],
            buynum:1
        }
    }
    //轮播滚动的值
    changenum=(currentnum)=>{
        // console.log('123',currentnum);
        this.setState({
            currentimg:currentnum,
            
        })

    }
    //弹窗
    //显示隐藏
    show=()=>{
        this.setState({
            ...this.state,
            isok:!this.state.isok,
            currentstatus:this.state.isok ?'none': 'block'

        })
        
    }
    // 获取参数id
    componentDidMount(){
        // console.log(this.props,);
        let gid=this.props.match.params.gid.split('=')[1];
        // axios
        this.props.axios.get('http://47.107.182.207:3002/listdetail',{
            params:{
                gid

            }
            
        }).then(res=>{
            console.log(res.data.data[0]);
            this.setState({
                data:res.data.data[0]

            });
        })
    }
    // 购买数量
    changenum(e){
        console.log(e.target);

        this.setState({
            buynum:e.target.defaultValue
        })
    }
    // 增加数量
    addordelete(fntype){
        
        // console.log(this.refs.numvalue.value)
        if(fntype=='addnum'){
            // console.log('增加');
            this.refs.numvalue.value=this.refs.numvalue.value*1+1
            this.setState({
                buynum:this.refs.numvalue.value
            })

        }
        else if(fntype=='deletenum'){
            // console.log('删除');
            this.refs.numvalue.value=this.refs.numvalue.value*1-1
            if(this.state.buynum*1<=1){
                this.refs.numvalue.value=1;

            }
            this.setState({
                buynum:this.refs.numvalue.value
            })

        }

    }
    // 加入购物车
    addToCart(){
        // console.log('加入购物车',this.state.data);
        let gid=this.props.match.params.gid.split('=')[1];
        let goods_name=this.state.data.subject;
        let goods_price=this.state.data.sale_price;
        let goods_imgurl=this.state.data.photo;
        let goods_qty=this.state.buynum;
        console.log(gid,goods_name,goods_price,goods_imgurl,goods_qty);
        var params = new URLSearchParams();
        params.append('goods_id',gid);
        params.append('goods_name',goods_name);
        params.append('goods_price',goods_price);
        params.append('goods_imgurl',goods_imgurl);
        params.append('goods_qty',goods_qty);
        this.props.axios({
            method: "post",
            url: "http://47.107.182.207:3002/addtocart",
            data: params
        }).then(res => {
                console.log('数据',res);
        
        
        
        });


     

        // this.props.axios.get({'http://localhost:3001/addtocart',{
        //         gid,
        //         goods_name,
        //         goods_price,
        //         goods_imgurl,
        //         goods_qty

        // }).then(res=>{
        //     console.log('res',res)
            
           
        // })
    }
    // 跳转购物车
    jumpcart(){
        console.log(123456789);
        this.props.history.push('/cart');
    }
    handleBackClick(){
        this.props.history.goBack(); 
    }
   
    render(){
        // console.log(this.state.data)
        return(
            <div  className='detail'>
                {/*头部*/}
                <div className="wap-top-bar hide" style={{display: "block"}}>
                    <header className="ftc head-top bgfff zcolor rela">
                    <div className="">
                    <a href="javascript:;" className="aback page-top go-back left-more"  onClick={this.handleBackClick.bind(this)}>
                    </a>
                    <span className="topbar-title" style={{display: "block"}}><div className="tabtop ft18 ftc"><span className="active">商品</span><a href="javascript:void(0);"><span>详情{this.state.isok}</span></a><a href="javascript:void(0);"><span>评价</span></a></div></span>
                    <div className="zfont ft16 block">
                    <a className="zcolor topbar-link goods-tracks gico" >
                    &nbsp;&nbsp; </a>
                    </div>
                    <span className="mla pull-right Jbur ml J_bur right-more" onClick={this.show}>
                    </span>
                    </div>
                    </header>                  
                </div>


                {/*显示隐藏*/}
                {
                   /* <Detailheader isshow={this.state.currentstatus} istrue={this.state.isok}/>*/
                }

               
        
                {/*内容*/}
                <main className='details_main'>
                    <div className='container'>
                    {/*轮播图*/}
                    <div className='slideshow' style={{height:'500px'}}>
                        <Carousel afterChange={this.changenum} dots={false}>
                            <div><h3><img src='https://img1.epetbar.com/2018-11/27/18/52096b1f4c8602b907a04a9d18b576df.jpg?x-oss-process=style/cut&$1=500&$2=500' /></h3></div>
                            <div><h3><img src='https://img1.epetbar.com/2017-09/08/13/03f81fc29fddba139fa8a4c0a1caf865.jpg?x-oss-process=style/cut&$1=500&$2=500' /></h3></div>
                            <div><h3><img src='https://img1.epetbar.com/2017-09/08/13/40545cbf2ded3de907a7ee70f4bdddc6.jpg?x-oss-process=style/cut&$1=500&$2=500' /></h3></div>
                            <div><h3><img src='https://img1.epetbar.com/2018-11/27/18/52096b1f4c8602b907a04a9d18b576df.jpg?x-oss-process=style/cut&$1=500&$2=500' /></h3></div>
                        </Carousel>
                        <span className='imgnum'>{this.state.currentimg+1}/4</span>
                    </div>
                    {/*商品详情*/}
                    <div className='list' style={{background:'#fff',padding:'0px 8px',borderBottom:'1px solid #ccc'}}>
                        <p style={{height:'26px',lineHeight:'26px',marginBottom:'0'}}>{this.state.data.subject}</p>
                        <p style={{height:'26px',color:'red',lineHeight:'26px',marginBottom:'0'}}>{this.state.data.presubject}</p>
                    </div>
                    <div className='listprice' style={{height:'36px',background:'#fff',borderBottom:'1px solid #ccc'}}>
                        <p style={{width:'200px',height:'36px',lineHeight:'36px',padding:'0px 0px 0px 8px',margin:'0',float:'left'}}><span style={{display:'inline-block',fontSize:'16px',color:'red',marginRight:'5px'}}>￥{this.state.data.sale_price}</span><span><del>￥{this.state.data.market_price}</del></span></p>
                        <p style={{float:'right',width:'78px',height:'25px',marginTop:'5px',marginRight:'8px'}}>
                            <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/quality_assurance.png" alt="" className="price-right-img" style={{width:'78px',height:'25px'}}/>
                        </p>

                    </div>
                    {/*数量*/}
                    <div className="buynum bgfff pad10" style={{borderBottom:'1px solid #ccc'}}>
                        <span className="dib w20 c333 ft13 descspan">购买数量</span><div className="dib w80"><span className="dib newbbt newbtop newbleft dec-btn format-title ftc handcursor c999 disableColor buyspan" onClick={this.addordelete.bind(this,'deletenum')}>-</span><input type="text"  defaultValue={this.state.buynum} onChange={this.changenum.bind(this)} style={{textAlign:'center'}} ref='numvalue'/><span className="dib ftc newbbt newbtop newbright add-btn format-title handcursor c999 buyspan" onClick={this.addordelete.bind(this,'addnum')}>+</span>
                        </div>
                    </div>
                    
                    {/*其余*/}
                    <div className='pro-exhibition' style={{width:'100%'}}>
                       <img  src={require('../../assests/img/addr.PNG')} style={{width:'100%'}}/>
                    </div>
                   
                    <div className="bgfff describe-ul ft12 c666 bgfffdiv">
                        <span className="tag-item pt10 pb10" style={{width:'100px'}}><img src="https://static.epetbar.com/static_wap/appmall/lib/goods/qualityassurance.png" alt=""/> <span></span> <span>正品保证</span></span><span className="tag-item pt10 pb10"><img src="https://static.epetbar.com/static_wap/appmall/lib/goods/freeshipping.png" alt=""/> <span></span> <span>99元包邮</span></span><span className="tag-item pt10 pb10"><img src="https://static.epetbar.com/static_wap/appmall/lib/goods/thirtydays.png" alt=""/> <span></span> <span>30天退货</span>
                        </span>
                    </div>
                    <div>
                        <div className="margin-div" style={{height:'10px'}}>
                        </div>
                    </div>
                    <div>
                        <div className="brandhotbuy_info bgfff"><ul className="ml10"><li className="fl rela brand-img"><p className="recommend none">荐</p> <img src={"https://img1.epetbar.com/brand/brandLogo/purchase_suppliers_file_1536218266.png"} className="w100"/></li> <li className="brand-tit fl"><div><div className="fl ft13 c333"><p>K9</p> <p></p></div> <span className="fr follow-btn ft13 no-follow"><span className="mr3"><img src={"//static.epetbar.com/static_wap/epetapp/pages/goods_detail/images/add.png"} alt=""/></span><span>关注</span></span> <div className="clear"></div></div></li></ul> <div className="ml10 mr10 desc ft12 c333"><ul className="clearfix"><li className="fl ftc rela"><p>116</p> <p className="c999">全部商品</p></li><li className="fl ftc rela"><p>188</p> <p className="c999">关注人数</p></li><li className="fl ftc rela"><p>0</p> <p className="c999">品牌动态</p></li></ul></div>
                        </div>
                    </div>
                    <div>
                        <div className="btn-a bgfff"><a href="javascript:;" className="ftc mt10">查看商品</a><a href="javascript:;" className="ftc mt10 fr">进入品牌馆</a>
                        </div>
                    </div>
                    <div>
                    <div className="margin-div" style={{height:'10px'}}></div>
                    </div>
                    <div className="bgfff ft12 ftc pull-to-detail handcursor" style={{display:' block'}}><ul className="bgfff bbt"><li className="pad10 ft12 rela  c666 ftc"><a href="javascript:;" className="db ftc w100"><div className="ct dib ft14 c666 mt3"><span className="ellipsis pr5 fl">查看图文详情</span> <span >&gt;</span></div></a></li></ul>
                    </div>             
                    </div>
                </main>

                {/*底部*/}
                <footer className='details_footer pro-exhibition'>
                    <div className="shopping clearfix"><div className="fl rela w50 function clearfix"><a className="ftc w50 function-item handcursor fl db"><i className="icon iconfont lh20 collection nocoll"><span></span></i> <p className="evaluate-count ft12 lh20 c999">收藏</p></a> <a className="ftc w50 function-item fl db"><i className="icon iconfont lh20 addcar"><span className="carttotalnum">0</span></i> <p className="evaluate-count ft12 lh20 c999" onClick={this.jumpcart.bind(this)}>购物车</p></a></div> <div className="fl w50 to-buy ftc handcursor flex ft15 red" ><p style={{width:'100%'}}  onClick={this.addToCart.bind(this)}>加入购物车</p></div>
                    </div>       
                </footer>


                 {/*弹窗 <Button >Open the notification box</Button>*/}
              
            </div>
        
        );


    }
}
// 高阶组件的使用
// axios高阶组件
Details=withAxios(Details);
Details=withRouter(Details);




export default Details;