import React,{Component} from 'react';
import './Good.css';

//引入高阶组件
import withAxios from '../../hoc/withAxios.js';
import { withRouter } from 'react-router-dom';
import Xhead from '../../Component/header';
import imgURL from '../../assests/img/loading.gif';



class Goods extends Component {
    constructor() {
        super();
        this.state = {
            showMore:true,
            contentClass:"conditionArea",
            isScrollTop : true,
            loading:false,
            goodsArr:[]
        };
    }
    handleBackClick(){
        this.props.history.goBack(); 
    }
    isShow(){ 
        this.setState({
            showMore : !this.state.showMore
        })
        
    }
    // async 
    componentWillMount(){
         window.removeEventListener('scroll', this.handleScroll(this), true);

        // this.props.axios.get('http://localhost:3001/goodslist',{

        // }).then(res=>{
        //     console.log(res.data.data);
        //     let timer='';
        //     clearTimeout(timer);
        //     timer =setTimeout(()=>{
        //         this.setState({
        //            loading:true,
        //            goodsArr:res.data.data
        //         })

        //     },400);
           
        // })
    }
    componentDidMount(){
        let _this=this;
        window.addEventListener('scroll',this.handleScroll.bind(_this),true);

        // 异步操作
        
        this.props.axios.get('http://47.107.182.207:3002/goodslist',{

        }).then(res=>{
            console.log(res.data.data);
            let timer='';

            clearTimeout(timer);
            timer =setTimeout(()=>{
                this.setState({
                   loading:true,
                   goodsArr:res.data.data
                })
                // console.log(666)

            },400);
           
        })
    }
    // 处理滚动事件
    handleScroll(){
        //上面的必须bind，不能不bind不然指向window
        // console.log(this.state.isScrollTop);
        let h = document.body.scrollTop;
            // console.log(h);
            if(h > 74){
                if(this.state.isScrollTop){
                    console.log('111');
                    this.state.isScrollTop = false;
                    this.setState({
                     contentClass:"conditionArea_fixed"
                    });
                }
            }
            else{
                if(!this.state.isScrollTop){
                    console.log("333");
                    this.state.isScrollTop = true;
                    this.setState({
                        contentClass:"conditionArea"
                    });
                }             
        }
    }

    // 跳转详情页
    jumpDetail=(currentDataId)=>{
       // console.log(currentDataId,this.props.history);
        this.props.history.push({pathname:`/details/gid=${currentDataId}`}) ;

    }
    
    render(){
        // console.log('渲染数据',this.state.goodsArr)
        return (
            <div className='goodslist'>
                <div className="wap-top-bar hide" style={{display: "block"}}>
                    <header className="ftc bgfff zcolor rela">
                        <div className="">
                            <a href="javascript:;" className="aback page-top go-back left-more" onClick={this.handleBackClick.bind(this)}></a>
                            <span className="ft18 topbar-title" style={{display: "block"}}>
                                <div className="tabtop ftc">
                                    <span style={{color:'#000'}}>商品列表</span>
                                </div>
                            </span>        
                            <span className="mla pull-right Jbur ml J_bur right-more" onClick={this.isShow.bind(this)}></span>
                        </div>
                        <Xhead {...this.state}></Xhead>
                    </header>              
                </div>
                
                
                
                <main className='showlist'>
                    
                    {
                        
                        this.state.loading
                        ?
                        <div className='listrender'>
                            {/*搜索框*/}
                            <div className="pad10 bgfff search-wrap" style={{borderTop:'1px solid #ccc'}}>
                                 <div className="search clearfix round5 pl10 pr10 rela"><a href="https://wap.epet.com/search.html?pet_type=dog&amp;fw=0"><i className="brands-ico db fl ownpng"></i> <div className="search-text c666 ft14"><input type="search" placeholder="点击搜索商品"/></div></a>
                                 </div>
                            </div>
                            {/*筛选*/}
                            <div className={[this.state.contentClass].join(' ') }   style={{top: '0px',zIndex:'100'}}> 
                                <ul className="clearfix bgfff screening bbt overflow w100" style={{marginBottom: '0'}}>
                                    <li className="fl ftc w25 current"><a href="javascript:;" className="db rela ft14"><span>默认<span className="arrow" style={{display:'inline-block'}}></span></span></a> 
                                    </li>
                                    <li className="fl ftc w25"><a href="javascript:;" className="db rela ft14"><span>销量</span></a>
                                    </li>
                                    <li className="fl ftc w25"><a href="javascript:;" className="db rela ft14 arrow-default"><span>价格</span></a> 
                                    </li>
                                    <li className="fl ftc select4 w25"><a href="javascript:;" className="rela ft14">筛选</a>
                                    </li>
                                </ul>
                                <ul className="quicklist clearfix bgfff" style={{marginBottom: '1px'}}>
                                    <li className="ftc ft12 rela"><a href="javascript:;" className="quickname ell"><span>品牌</span><i className="arrow" style={{display:'inline-block'}}></i></a>  <span className="white-line abs" style={{display: "none"}}></span>
                                    </li>
                                    <li className="ftc ft12 rela"><a href="javascript:;" className="quickname ell"><span>商品功效</span><i className="arrow" style={{display:'inline-block'}}></i></a>  <span className="white-line abs"  style={{display: 'none'}}></span>
                                    </li>
                                    <li className="ftc ft12 rela"><a href="javascript:;" className="quickname ell"><span>物理形态</span><i className="arrow" style={{display:'inline-block'}}></i></a>  <span className="white-line abs"  style={{display: 'none'}}></span>
                                    </li>
                                    <li className="ftc ft12 rela"><a href="javascript:;" className="quickname ell"><span>价格区间</span><i className="arrow" style={{display:'inline-block'}}></i></a>  <span className="white-line abs" style={{display: 'none'}}></span>
                                    </li>
                                </ul>
                                <div className="quickcon-wrap fixed hide">
                                    <div className="quickcon bgfff" style={{maxHeight: "320px"}}>
                                        <ul className="clearfix">
                                            <li className="ftc ft12 current"><a href="javascript:;" className="quickcon-name ell">不限制</a>
                                            </li>
                                            <li className="ftc ft12"><a href="javascript:;" className="quickcon-name ell">粉剂</a>
                                            </li>
                                            <li className="ftc ft12"><a href="javascript:;" className="quickcon-name ell">片剂</a>
                                            </li>
                                            <li className="ftc ft12"><a href="javascript:;" className="quickcon-name ell">液态</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="select1-box ftc hide">
                                    <ul className="select1-con bgf5 ftleft">
                                        <li className="pad10 rela current"><a href="javascript:;" className="ft14">默认排序</a>
                                        </li>
                                        <li className="pad10 rela"><a href="javascript:;" className="ft14">按人气</a>
                                        </li>
                                        <li className="pad10 rela"><a href="javascript:;" className="ft14">最新上架</a>
                                        </li>
                                        <li className="pad10 rela"><a href="javascript:;" className="ft14">按评论</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="filterBox-wrap clearfix rela" style={{height: "640px"}}>
                                    <div className="filterBox-list fl">
                                        <div className="filterBox-list-con">
                                            <ul>
                                                <li className="ftc ft12 current"><a href="javascript:;">品牌</a>
                                                </li>
                                                <li className="ftc ft12"><a href="javascript:;">商品功效</a>
                                                </li>
                                                <li className="ftc ft12"><a href="javascript:;">物理形态</a>
                                                </li>
                                                <li className="ftc ft12"><a href="javascript:;">价格区间</a>
                                                </li>
                                                <li className="ftc ft12"><a href="javascript:;">商品来源</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="filterBox-con fl bgfff">
                                        <div className="filterBox-con-area">
                                            <ul style={{padding: "0px 0px 100px 10px"}}>
                                                <li className="">
                                                    <a href="javascript:;"></a>
                                                </li>
                                                <li className="">
                                                    <a href="javascript:;"></a>
                                                </li>
                                                <li className="">
                                                    <a href="javascript:;"></a>
                                                </li>
                                                <li className="">
                                                    <a href="javascript:;"></a>
                                                </li>
                                                <li className="">
                                                    <a href="javascript:;"></a>
                                                </li>
                                                <li className="">
                                                    <a href="javascript:;"></a>
                                                </li>
                                                <li className="">
                                                    <a href="javascript:;"></a>
                                                </li>
                                                <li className="">
                                                    <a href="javascript:;"></a>
                                                </li>
                                                <li className="">
                                                    <a href="javascript:;"></a>
                                                </li>
                                                <li className="">
                                                    <a href="javascript:;"></a>
                                                </li>
                                                <li className="">
                                                    <a href="javascript:;"></a>
                                                </li>
                                                <li className="">
                                                    <a href="javascript:;"></a>
                                                </li>
                                                <li className="">
                                                    <a href="javascript:;"></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="btn-area">
                                        <div className="btn-goods ft14">有<span className="c58">39</span>件商品</div>
                                        <div className="btn-reset ft14">重置</div>
                                        <div className="btn-ok ft14">确定</div>
                                    </div>
                                </div>
                            </div>

                            {/*列表展示  dataid='001'*/}
                            
                                <div className='listdata' >
                                    <ul className='listul' >
                                    {
                                        this.state.goodsArr.map((item,idx)=>{
                                        return <li  className='listli' key={idx} dataid={item.gid}  onClick={this.jumpDetail.bind(this,item.gid)}>
                                                    <img src={item.photo}/>
                                                    <p className='listp'>
                                                    <span style={{color:'#000'}}>{item.subject}</span>
                                                    <br/>
                                                    <span style={{margin:'15px 20px 0 0',color:'red'}}>￥{item.sale_price}元</span>
                                                    <span>{item.dprice}</span>
                                                    <br/>
                                                    <span style={{marginRight:'5px'}}>{item.comments}</span>
                                                    <span>{item.sold}</span>
                                                    <img className='lastspan' src='https://static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png'/>
                                                    </p>
                                                </li>
                                        })
                                    }

                                    </ul>   
                                </div>


                            
                        </div>
                        :
                        <div className='loadingshow' style={{width:'100%',height:'100%'}}>
                            <div style={{margin:'auto',width:'120px',height:'100px',marginTop:'200px'}}>
                                <img src={imgURL} className='loadingimg' style={{width:'120px',height:'100px'}}/>
                                <br/>
                                <span  style={{width:'120px',height:'20px',textAlign:'center',display:'inline-block',fontSize:'14px'}}>
                                    加载数据中...
                                </span>
                            </div>
                        </div>
                        

                    }



                </main>
            </div>
     
        )
    }
}

// 高阶组件的使用
// axios高阶组件
Goods=withAxios(Goods);
// 路由跳转
Goods = withRouter(Goods);

export default Goods;