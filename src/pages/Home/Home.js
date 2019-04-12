// import React,{Component}  from 'react';
// import React from 'react';

// import './home.css';

// let Home =()=>{
//     return <div>首页</div>
// }

// export default Home;

import React,{Component}  from 'react';


import './home.css';

import { DatePicker } from 'antd';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import { Carousel } from 'antd';




  

  
class Home extends Component{
  constructor(){
    super();
    this.state={

    }
  }

  onChange(a, b, c) {
    console.log(a, b, c);
  }

  render(){  
    

    return ( <div className="niubi">
        {/* 首页第一个轮播图 */}
        <div className="lbt">
        <Carousel autoplay={this.onChange}>
         <div><img src="http://img2.epetbar.com/2019-04/03/20/bce86b46965eb2222dcc3644f71ef8c1.jpg?x-oss-process=style/water" /></div>
          <div><img src="http://img2.epetbar.com/2019-03/29/10/6a238ac221fd3b23e9f42556c526edc7.jpg?x-oss-process=style/water"/></div>
          <div><img src="http://img2.epetbar.com/2019-03/29/20/6ce47685dd778fb1756d0d2a8f092da8.jpg?x-oss-process=style/water"/></div>
          <div><img src="http://img2.epetbar.com/2019-03/22/11/fa16ebbf8a57d217eda19ff89448d824.jpg?x-oss-process=style/water"/></div>
         </Carousel>
        </div>
         

         <div className="sousuo">
              <div className="flixt pl15 search pr15 pl15  flex">
                    <a className="db it1 bgfff80 round30 mr15">
                      <div className="flixt1">
                        <img src="assets/img/sousuo.png" className="searchimg dib ml15"/>
                        <span className="dib ft12 c666" style={{width:"275px"}}>
                         请输入搜索内容  
                        </span>
                      </div>
                    </a>
                    <p className="rela">
                      <a>
                        <span className="mess1 mt3"><img src="assets/img/xiaoxi.png"/></span>
                      </a>
                    </p>
              </div>
            {/* 1 */}
            <div className="vux-tab-wrap">
              <div className="vux-tab-container">
                <ul className="AA" style={{marginBottom:'0'}}>
                  <li><a style={{marginLeft:'30px',fontSize:'20px'}}>精选</a></li>
                  <li><a>超级品类日</a></li>
                  <li><a>国产狗粮</a></li>
                  <li><a style={{}}>进口狗粮</a></li>
                  <li><a>特殊狗粮</a></li>
                  <li><a>强化免疫</a></li>
                  <li><a>内外驱虫</a></li>
                  <li><a>黑科技</a></li>
                </ul>
              </div>
            </div>
         </div>
           {/* 2 */}
            <div className="menus divw" style={{marginTop:'-10px'}}>
                <ul className="flex">
                  <li>
                    <a className="db">
                      <img className="w100 db" src="assets/img/nr01.png"/>
                    </a>
                  </li>
                  <li>
                    <a className="db">
                      <img className="w100 db" src="assets/img/nr02.png"/>
                    </a>
                  </li>
                  <li>
                    <a className="db">
                      <img className="w100 db" src="assets/img/nr03.png"/>
                    </a>
                  </li>
                  <li>
                    <a className="db">
                      <img className="w100 db" src="assets/img/nr04.png"/>
                    </a>
                  </li>
                  <li>
                    <a className="db">
                      <img className="w100 db" src="assets/img/nr05.png"/>
                    </a>
                  </li>
               
                </ul>
            </div>

            {/* 内容2  */}
            <div className="mould_203">
                    <div>
                        <a>
                          <img src="assets/img/zx.jpg" />
                        </a>
                    </div>
                    <div>
                        <a>
                          <img src="assets/img/zx1.jpg" />
                        </a>
                    </div>
            </div>

            {/* 内容3 */}
            <div className="gif">
              <img src="http://img2.epetbar.com/2019-04/04/19/9ee56858463f19c3ad865e47cbbc2166.gif?x-oss-process=style/water"/>
            </div>

            {/* 每日疯抢 */}
            <div className="mould_209">
              <div className="daily flex bgfff ml10 mr10 round20">
                <div className="it1 snapup pt15 pb15">
                  <div className="flex-ac title ml10 mr5">
                      <div className="rela dib">
                          <img src="assets/img/mrfq.png"/>
                          <div className=" time ftc overflow ft10">
                            <div className="cfff timenum fl">
                                <span className="dib">10点场</span>
                            </div>
                            <div className="c333 bold timeout bgfff fl">
                                <span className="dib statetitle">
                                    即将开始
                                </span>
                            </div>
                          </div>
                      </div>
                  </div>

                  <div>
                    <ul className="flex ftc mt15 w100 pr10">
                      <li className="rela">
                          <a className="db ml10">
                              <img id="vux-ximg-bgj37" className="vux-x-img goods_img b-loaded" src="https://img1.epetbar.com/2016-06/27/14/088ad8aa1053ca837bae8049e54d1fa2.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                              <p className="nft10 cf0 bold">
                              ¥
                              <span className="ft14">24.00</span>
                              </p>
                              <p className="nft10 c999 textline">
                              <span className="ft10">¥240.00</span>
                              </p>

                              <div className="discount">
                                  <img src="https://static.epetbar.com/static_wap/appmall/main/index_icon_berserk_discount.png?version=03"/>
                              </div>
                          </a>
                      </li>
                      <li className="rela">
                          <a className="db ml10">
                              <img id="vux-ximg-bgj37" className="vux-x-img goods_img b-loaded" src="https://img1.epetbar.com/2018-05/02/15/a6014b0a92bc7771d91c95c4387954ac.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                              <p className="nft10 cf0 bold">
                              ¥
                              <span className="ft14">24.00</span>
                              </p>
                              <p className="nft10 c999 textline">
                              <span className="ft10">¥240.00</span>
                              </p>

                              <div className="discount">
                                  <img src="https://static.epetbar.com/static_wap/appmall/main/index_icon_berserk_discount.png?version=03"/>
                              </div>
                          </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="it1 snapup pt15 pb15">
                  <div className="flex-ac title ml10 mr5">
                      <div className="rela dib">
                          <img src="https://static.epetbar.com/static_wap/appmall/main/index_icon_egroup_415.png?version=03"/>
                   
                      </div>
                  </div>

                  <div>
                    <ul className="flex ftc mt15 w100 pr10">
                      <li className="rela">
                          <a className="db ml10">
                              <img id="vux-ximg-bgj37" className="vux-x-img goods_img b-loaded" src="https://img1.epetbar.com/2016-06/27/14/088ad8aa1053ca837bae8049e54d1fa2.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                              <p className="nft10 cf0 bold">
                              ¥
                              <span className="ft14">24.00</span>
                              </p>
                              <p className="nft10 c999 textline">
                              <span className="ft10">¥240.00</span>
                              </p>

                          </a>
                      </li>
                      <li className="rela">
                          <a className="db ml10">
                              <img id="vux-ximg-bgj37" className="vux-x-img goods_img b-loaded" src="https://img1.epetbar.com/2018-05/02/15/a6014b0a92bc7771d91c95c4387954ac.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                              <p className="nft10 cf0 bold">
                              ¥
                              <span className="ft14">24.00</span>
                              </p>
                              <p className="nft10 c999 textline">
                              <span className="ft10">¥240.00</span>
                              </p>
                          </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* 品牌特卖 */} 
            <div className="mould_208">
              <div className="title ml10 pr10 flex">
                 <div className="leftimg it3">
                  <a>
                    <img src="https://img2.epetbar.com/nowater/2018-10/19/18/70a514335f1957ee99e41c14c364a05c.png" />
                  </a>
                 </div>

                 <div className="rightimg">
                    <a>
                      <img  src="https://img2.epetbar.com/nowater/2018-10/18/18/01c98c8320c7f1567ac409a7a847607d.png"/>
                    </a>
                 </div>
              </div>
            </div>



          {/* 轮播图2 */}
            <div className="lbt2">
              <Carousel afterChange={this.onChange}>
                <div className="mould_214">
                    <div className="ml10 mr10">
                        <a className="db"><img src="http://img2.epetbar.com/nowater/showcase/2019/04/08/091232958.jpg@!water" /></a>
                        <div className="flex mt10">
                            <a className="db fl mr5"><img src="http://img2.epetbar.com/nowater/showcase/2019/04/08/092837985.jpg@!water" /></a>
                            <a className="db fl mr5"><img src="http://img2.epetbar.com/nowater/showcase/2019/04/08/092837985.jpg@!water" /></a>
                        </div>
                    </div>
                </div>
                <div className="mould_214">
                    <div className="ml10 mr10">
                        <a className="db"><img src="http://img2.epetbar.com/nowater/showcase/2019/04/08/091232958.jpg@!water" /></a>
                        <div className="flex mt10">
                            <a className="db fl mr5"><img src="http://img2.epetbar.com/nowater/showcase/2019/04/08/092837985.jpg@!water" /></a>
                            <a className="db fl mr5"><img src="http://img2.epetbar.com/nowater/showcase/2019/04/08/092837985.jpg@!water" /></a>
                        </div>
                    </div>
                </div>
                <div className="mould_214">
                    <div className="ml10 mr10">
                        <a className="db"><img src="http://img2.epetbar.com/nowater/showcase/2019/04/08/091232958.jpg@!water" /></a>
                        <div className="flex mt10">
                            <a className="db fl mr5"><img src="http://img2.epetbar.com/nowater/showcase/2019/04/08/092837985.jpg@!water" /></a>
                            <a className="db fl mr5"><img src="http://img2.epetbar.com/nowater/showcase/2019/04/08/092837985.jpg@!water" /></a>
                        </div>
                    </div>
                </div>
                <div className="mould_214">
                    <div className="ml10 mr10">
                        <a className="db"><img src="http://img2.epetbar.com/nowater/showcase/2019/04/08/091232958.jpg@!water" /></a>
                        <div className="flex mt10">
                            <a className="db fl mr5"><img src="http://img2.epetbar.com/nowater/showcase/2019/04/08/092837985.jpg@!water" /></a>
                            <a className="db fl mr5"><img src="http://img2.epetbar.com/nowater/showcase/2019/04/08/092837985.jpg@!water" /></a>
                        </div>
                    </div>
                </div>
              </Carousel>
            </div>
            
            {/* E宠物国际 */}
              <div className="mould_208">
              <div className="title ml10 pr10 flex">
                 <div className="leftimg it3">
                  <a>
                    <img src="https://img2.epetbar.com/nowater/2018-10/18/18/c529a10ea2355ecf3c72258de10701ae.png" />
                  </a>
                 </div>

                 <div className="rightimg">
                    <a>
                      <img  src="https://img2.epetbar.com/nowater/2018-10/18/18/01c98c8320c7f1567ac409a7a847607d.png"/>
                    </a>
                 </div>
              </div>
            </div>
            {/* 轮播图3 */}
            <div className="lbt3">
            <Carousel autoplay={this.onChange}>
              <div className="lbt3A">
                <div className="ml10 mr10">
                  <a>
                  <img className="w100 db" src="http://img2.epetbar.com/2018-10/18/18/4a2465f4f49c13c19713d609f0d3f7bb.png?x-oss-process=style/water" />
                  </a>
                </div>
              </div>
              <div className="lbt3A">
                <div className="ml10 mr10">
                  <a>
                  <img className="w100 db" src="http://img2.epetbar.com/2018-10/18/18/dd6fc0f804cdc0916a90ff9f8ae40210.png?x-oss-process=style/water" />
                  </a>
                </div>
              </div>
              <div className="lbt3A">
                <div className="ml10 mr10">
                  <a>
                  <img className="w100 db" src="http://img2.epetbar.com/2018-10/18/18/a58cdd618421fe0ba99c534ba7e69765.png?x-oss-process=style/water" />
                  </a>
                </div>
              </div>
            </Carousel>
            </div>

            {/* 新品馆 */}
              <div className="mould_208">
              <div className="title ml10 pr10 flex">
                 <div className="leftimg it3">
                  <a>
                    <img src="https://img2.epetbar.com/nowater/2018-10/18/21/86cb055b728a68ab706bb3168406543d.png" />
                  </a>
                 </div>

                 <div className="rightimg">
                    <a>
                      <img  src="https://img2.epetbar.com/nowater/2018-10/18/18/01c98c8320c7f1567ac409a7a847607d.png"/>
                    </a>
                 </div>
              </div>
            </div>

            {/* 轮播图4 */}
            <div className="lbt4">
              <Carousel afterChange={this.onChange}>
              <div className="Strictselection overflow">
                      <div className="ml10 mr10">
                          <div className="swiper-container mySwiper_goods swiper-container-initialized swiper-container-horizontal swiper-container-ios">
                              <div className="swiper-wrapper">
                                  <div className="rela swiper-slide swiper-slide-active swiper1">
                                    <img src="assets/img/xp2.jpg" />
                                  </div>
                              </div>
                          </div>
                      </div>
                    </div>
                    <div className="Strictselection overflow">
                      <div className="ml10 mr10">
                          <div className="swiper-container mySwiper_goods swiper-container-initialized swiper-container-horizontal swiper-container-ios">
                              <div className="swiper-wrapper">
                                  <div className="rela swiper-slide swiper-slide-active swiper1">
                                    <img src="assets/img/xp2.jpg" />
                                  </div>
                              </div>
                          </div>
                      </div>
                    </div>
                    <div className="Strictselection overflow">
                      <div className="ml10 mr10">
                          <div className="swiper-container mySwiper_goods swiper-container-initialized swiper-container-horizontal swiper-container-ios">
                              <div className="swiper-wrapper">
                                  <div className="rela swiper-slide swiper-slide-active swiper1">
                                    <img src="assets/img/xp2.jpg" />
                                  </div>
                              </div>
                          </div>
                      </div>
                    </div>
              </Carousel>
            </div>
            {/* 图片 */}
            <div className="tupian1"> 
              <div>
               <img src="http://img2.epetbar.com/2018-10/18/14/5610ec6beb192a92d989efa045ffa35b.jpg?x-oss-process=style/water" />
              </div>
              <div>
               <img src="http://img2.epetbar.com/2018-10/18/14/fc257191ff347b1d26e726936c1024c2.jpg?x-oss-process=style/water" />
              </div>
            </div>  

            {/* 知识精选 */}
            <div className="mould_208" style={{background:"rgba(255,255,255,0.8)"}}>
              <div className="title ml10 pr10 flex">
                 <div className="leftimg it3">
                  <a>
                    <img src="https://img2.epetbar.com/nowater/2018-10/18/18/f0ae00c3bfb036c84967a2487f7a02cc.png" />
                  </a>
                 </div>

                 <div className="rightimg">
                    <a>
                      <img  src="https://img2.epetbar.com/nowater/2018-10/18/18/01c98c8320c7f1567ac409a7a847607d.png"/>
                    </a>
                 </div>
              </div>
            </div>

            {/* 轮播图5 */}
            <div className="lbt3">
            <Carousel autoplay={this.onChange}>
              <div className="lbt3A">
                <div className="ml10 mr10">
                  <a>
                  <img className="w100 db" src="http://img2.epetbar.com/2018-10/18/17/3af9114b128927ea42a7528c40a9daae.jpg?x-oss-process=style/water" />
                  </a>
                </div>
              </div>
              <div className="lbt3A">
                <div className="ml10 mr10">
                  <a>
                  <img className="w100 db" src="http://img2.epetbar.com/2018-10/18/17/b8efd7fb8168fbb7e89d6b8cda395171.jpg?x-oss-process=style/water" />
                  </a>
                </div>
              </div>
              <div className="lbt3A">
                <div className="ml10 mr10">
                  <a>
                  <img className="w100 db" src="http://img2.epetbar.com/2018-10/18/18/a58cdd618421fe0ba99c534ba7e69765.png?x-oss-process=style/water" />
                  </a>
                </div>
              </div>
            </Carousel>
            </div>
              {/* 国产狗粮 */}
              <div className="mould_208" style={{background:"rgba(255,255,255,0.8)"}}>
              <div className="title ml10 pr10 flex">
                 <div className="leftimg it3">
                  <a>
                    <img src="https://img2.epetbar.com/nowater/2019-04/02/18/b00459bea7b4e869cb9ac96a3ea680d8.png" />
                  </a>
                 </div>

                 <div className="rightimg">
                    <a>
                      <img  src="https://img2.epetbar.com/nowater/2018-10/18/18/01c98c8320c7f1567ac409a7a847607d.png"/>
                    </a>
                 </div>
              </div>
            </div>
            {/* 滑动 */}
            <div className="mould_210">
              <div className="columnList mb15">
               <div className="ml10 mr10 bgfff columnList_con ftc">
                    <a className="db rela">
                      <img className="vux-x-img w100 adcover b-loaded" id="vux-ximg-pefva" style={{height:"116.197px"}} src="http://img2.epetbar.com/2019-04/02/18/eed954de27e4338b7e64050f1ae5812b.png?x-oss-process=style/water" />
                      <div className="radian">
                        <img className="db w100" src="assets/img/zz.png" />
                      </div>
                    </a>

                  <div className="pt20 pb10">
                      <div className="swiper-container mySwiper_goodslist swiper-container-initialized swiper-container-horizontal swiper-container-ios">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide swiper-slide-active" style={{width:"98.611px"}}>
                                <a className="db ml15">
                                    <img className="w100"  src="https://img1.epetbar.com/2018-04/08/10/f379b04f67e8932493d330bff6597776.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                    <p className="ntf10 cf0 bold">¥<span className="ft14">319.00</span></p>
                                    <p className="ntf10 c999 textline">¥<span className="ft12">597.60</span></p>
                                    
                                </a>
                            </div>
                            <div className="swiper-slide swiper-slide-active" style={{width:"98.611px"}}>
                                <a className="db ml15">
                                    <img className="w100"  src="https://img1.epetbar.com/2018-04/08/10/f379b04f67e8932493d330bff6597776.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                    <p className="ntf10 cf0 bold">¥<span className="ft14">319.00</span></p>
                                    <p className="ntf10 c999 textline">¥<span className="ft12">597.60</span></p>
                                    
                                </a>
                            </div>
                            <div className="swiper-slide swiper-slide-active" style={{width:"98.611px"}}>
                                <a className="db ml15">
                                    <img className="w100"  src="https://img1.epetbar.com/2018-04/08/10/f379b04f67e8932493d330bff6597776.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                    <p className="ntf10 cf0 bold">¥<span className="ft14">319.00</span></p>
                                    <p className="ntf10 c999 textline">¥<span className="ft12">597.60</span></p>
                                    
                                </a>
                            </div>
                            <div className="swiper-slide swiper-slide-active" style={{width:"98.611px"}}>
                                <a className="db ml15">
                                    <img className="w100"  src="https://img1.epetbar.com/2018-04/08/10/f379b04f67e8932493d330bff6597776.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                    <p className="ntf10 cf0 bold">¥<span className="ft14">319.00</span></p>
                                    <p className="ntf10 c999 textline">¥<span className="ft12">597.60</span></p>
                                    
                                </a>
                            </div>
                            <div className="swiper-slide swiper-slide-active" style={{width:"98.611px"}}>
                                <a className="db ml15">
                                    <img className="w100"  src="https://img1.epetbar.com/2018-04/08/10/f379b04f67e8932493d330bff6597776.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                    <p className="ntf10 cf0 bold">¥<span className="ft14">319.00</span></p>
                                    <p className="ntf10 c999 textline">¥<span className="ft12">597.60</span></p>
                                    
                                </a>
                            </div>
                            <div className="swiper-slide swiper-slide-active" style={{width:"98.611px"}}>
                                <a className="db ml15">
                                    <img className="w100"  src="https://img1.epetbar.com/2018-04/08/10/f379b04f67e8932493d330bff6597776.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                    <p className="ntf10 cf0 bold">¥<span className="ft14">319.00</span></p>
                                    <p className="ntf10 c999 textline">¥<span className="ft12">597.60</span></p>
                                    
                                </a>
                            </div>
                            <div className="swiper-slide swiper-slide-active" style={{width:"98.611px"}}>
                                <a className="db ml15">
                                    <img className="w100"  src="https://img1.epetbar.com/2018-04/08/10/f379b04f67e8932493d330bff6597776.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                    <p className="ntf10 cf0 bold">¥<span className="ft14">319.00</span></p>
                                    <p className="ntf10 c999 textline">¥<span className="ft12">597.60</span></p>
                                    
                                </a>
                            </div>
                            <div className="swiper-slide swiper-slide-active" style={{width:"98.611px"}}>
                                <a className="db ml15">
                                    <img className="w100"  src="https://img1.epetbar.com/2018-04/08/10/f379b04f67e8932493d330bff6597776.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                    <p className="ntf10 cf0 bold">¥<span className="ft14">319.00</span></p>
                                    <p className="ntf10 c999 textline">¥<span className="ft12">597.60</span></p>
                                    
                                </a>
                            </div>
                            
                        </div>
                      </div>
                  </div>
               </div>
              </div>
            </div>

            {/* 滑动2 */}
                         {/* 保健护理 */}
                         <div className="mould_208" style={{background:"rgba(255,255,255,0.8)"}}>
              <div className="title ml10 pr10 flex">
                 <div className="leftimg it3">
                  <a>
                    <img src="https://img2.epetbar.com/nowater/2018-10/19/18/5f63bd572e248f7c5600a61b9868490e.png" />
                  </a>
                 </div>

                 <div className="rightimg">
                    <a>
                      <img  src="https://img2.epetbar.com/nowater/2018-10/18/18/01c98c8320c7f1567ac409a7a847607d.png"/>
                    </a>
                 </div>
              </div>
            </div>
            {/* 滑动2 */}
            <div className="mould_210">
              <div className="columnList mb15">
               <div className="ml10 mr10 bgfff columnList_con ftc">
                    <a className="db rela">
                      <img className="vux-x-img w100 adcover b-loaded" id="vux-ximg-pefva" style={{height:"116.197px"}} src="http://img2.epetbar.com/2018-10/26/17/deb40cf8a6c2a6e2439ac93052c889fd.jpg?x-oss-process=style/water" />
                      <div className="radian">
                        <img className="db w100" src="assets/img/zz.png" />
                      </div>
                    </a>

                  <div className="pt20 pb10">
                      <div className="swiper-container mySwiper_goodslist swiper-container-initialized swiper-container-horizontal swiper-container-ios">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide swiper-slide-active" style={{width:"98.611px"}}>
                                <a className="db ml15">
                                    <img className="w100"  src="https://img1.epetbar.com/2018-09/12/15/c2793384623aa9f7462c83caf357d9b2.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                    <p className="ntf10 cf0 bold">¥<span className="ft14">319.00</span></p>
                                    <p className="ntf10 c999 textline">¥<span className="ft12">597.60</span></p>
                                    
                                </a>
                            </div>
                            <div className="swiper-slide swiper-slide-active" style={{width:"98.611px"}}>
                                <a className="db ml15">
                                    <img className="w100"  src="https://img1.epetbar.com/2018-04/08/10/f379b04f67e8932493d330bff6597776.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                    <p className="ntf10 cf0 bold">¥<span className="ft14">319.00</span></p>
                                    <p className="ntf10 c999 textline">¥<span className="ft12">597.60</span></p>
                                    
                                </a>
                            </div>
                            <div className="swiper-slide swiper-slide-active" style={{width:"98.611px"}}>
                                <a className="db ml15">
                                    <img className="w100"  src="https://img1.epetbar.com/2018-04/08/10/f379b04f67e8932493d330bff6597776.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                    <p className="ntf10 cf0 bold">¥<span className="ft14">319.00</span></p>
                                    <p className="ntf10 c999 textline">¥<span className="ft12">597.60</span></p>
                                    
                                </a>
                            </div>
                            <div className="swiper-slide swiper-slide-active" style={{width:"98.611px"}}>
                                <a className="db ml15">
                                    <img className="w100"  src="https://img1.epetbar.com/2018-04/08/10/f379b04f67e8932493d330bff6597776.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                    <p className="ntf10 cf0 bold">¥<span className="ft14">319.00</span></p>
                                    <p className="ntf10 c999 textline">¥<span className="ft12">597.60</span></p>
                                    
                                </a>
                            </div>
                            <div className="swiper-slide swiper-slide-active" style={{width:"98.611px"}}>
                                <a className="db ml15">
                                    <img className="w100"  src="https://img1.epetbar.com/2018-04/08/10/f379b04f67e8932493d330bff6597776.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                    <p className="ntf10 cf0 bold">¥<span className="ft14">319.00</span></p>
                                    <p className="ntf10 c999 textline">¥<span className="ft12">597.60</span></p>
                                    
                                </a>
                            </div>
                            <div className="swiper-slide swiper-slide-active" style={{width:"98.611px"}}>
                                <a className="db ml15">
                                    <img className="w100"  src="https://img1.epetbar.com/2018-04/08/10/f379b04f67e8932493d330bff6597776.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                    <p className="ntf10 cf0 bold">¥<span className="ft14">319.00</span></p>
                                    <p className="ntf10 c999 textline">¥<span className="ft12">597.60</span></p>
                                    
                                </a>
                            </div>
                            <div className="swiper-slide swiper-slide-active" style={{width:"98.611px"}}>
                                <a className="db ml15">
                                    <img className="w100"  src="https://img1.epetbar.com/2018-04/08/10/f379b04f67e8932493d330bff6597776.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                    <p className="ntf10 cf0 bold">¥<span className="ft14">319.00</span></p>
                                    <p className="ntf10 c999 textline">¥<span className="ft12">597.60</span></p>
                                    
                                </a>
                            </div>
                            <div className="swiper-slide swiper-slide-active" style={{width:"98.611px"}}>
                                <a className="db ml15">
                                    <img className="w100"  src="https://img1.epetbar.com/2018-04/08/10/f379b04f67e8932493d330bff6597776.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                    <p className="ntf10 cf0 bold">¥<span className="ft14">319.00</span></p>
                                    <p className="ntf10 c999 textline">¥<span className="ft12">597.60</span></p>
                                    
                                </a>
                            </div>
                            
                        </div>
                      </div>
                  </div>
               </div>
              </div>
            </div>

            {/* 滑动广告 */}
            <div className="huadong">
              <div className="mould_215" style={{marginBbottom:"20px"}}> 
                <div className="ml10 mr10 bgfff  ftc brand pt15 pl15 pb15">
                  <div className="swiper-container mySwiper_brand swiper-container-initialized swiper-container-horizontal swiper-container-ios">
                    <div className="swiper-wrapper">  
                        <div className="swiper-slide swiper-slide-active" style={{width:"90px",marginRight:"10px"}}>
                          <a className="db">
                            <img src="https://img2.epetbar.com/nowater/brand_logo/2013-01/18/c9b30036ec5701bb038d0dbb3dfbbc06.jpg?x-oss-process=style/fill&$1=100&$2=50" />
                          </a>
                        </div>
                        <div className="swiper-slide swiper-slide-active" style={{width:"90px",marginRight:"10px"}}>
                          <a className="db">
                            <img src="https://img2.epetbar.com/nowater/brand_logo/2013-01/18/c9b30036ec5701bb038d0dbb3dfbbc06.jpg?x-oss-process=style/fill&$1=100&$2=50" />
                          </a>
                        </div>
                        <div className="swiper-slide swiper-slide-active" style={{width:"90px",marginRight:"10px"}}>
                          <a className="db">
                            <img src="https://img2.epetbar.com/nowater/brand_logo/2013-01/18/c9b30036ec5701bb038d0dbb3dfbbc06.jpg?x-oss-process=style/fill&$1=100&$2=50" />
                          </a>
                        </div>
                        <div className="swiper-slide swiper-slide-active" style={{width:"90px",marginRight:"10px"}}>
                          <a className="db">
                            <img src="https://img2.epetbar.com/nowater/brand_logo/2013-01/18/c9b30036ec5701bb038d0dbb3dfbbc06.jpg?x-oss-process=style/fill&$1=100&$2=50" />
                          </a>
                        </div>
                        <div className="swiper-slide swiper-slide-active" style={{width:"90px",marginRight:"10px"}}>
                          <a className="db">
                            <img src="https://img2.epetbar.com/nowater/brand_logo/2013-01/18/c9b30036ec5701bb038d0dbb3dfbbc06.jpg?x-oss-process=style/fill&$1=100&$2=50" />
                          </a>
                        </div>
                        <div className="swiper-slide swiper-slide-active" style={{width:"90px",marginRight:"10px"}}>
                          <a className="db">
                            <img src="https://img2.epetbar.com/nowater/brand_logo/2013-01/18/c9b30036ec5701bb038d0dbb3dfbbc06.jpg?x-oss-process=style/fill&$1=100&$2=50" />
                          </a>
                        </div>
                        <div className="swiper-slide swiper-slide-active" style={{width:"90px",marginRight:"10px"}}>
                          <a className="db">
                            <img src="https://img2.epetbar.com/nowater/brand_logo/2013-01/18/c9b30036ec5701bb038d0dbb3dfbbc06.jpg?x-oss-process=style/fill&$1=100&$2=50" />
                          </a>
                        </div>
                        <div className="swiper-slide swiper-slide-active" style={{width:"90px",marginRight:"10px"}}>
                          <a className="db">
                            <img src="https://img2.epetbar.com/nowater/brand_logo/2013-01/18/c9b30036ec5701bb038d0dbb3dfbbc06.jpg?x-oss-process=style/fill&$1=100&$2=50" />
                          </a>
                        </div>
                        <div className="swiper-slide swiper-slide-active" style={{width:"90px",marginRight:"10px"}}>
                          <a className="db">
                            <img src="https://img2.epetbar.com/nowater/brand_logo/2013-01/18/c9b30036ec5701bb038d0dbb3dfbbc06.jpg?x-oss-process=style/fill&$1=100&$2=50" />
                          </a>
                        </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>


            {/* 生活日用 */}
            <div className="mould_208" style={{background:"rgba(255,255,255,0.8)"}}>
              <div className="title ml10 pr10 flex">
                 <div className="leftimg it3">
                  <a>
                    <img src="https://img2.epetbar.com/nowater/2018-12/17/14/590ec7ecf89f97331153467f226b4e33.png" />
                  </a>
                 </div>

                 <div className="rightimg">
                    <a>
                      <img  src="https://img2.epetbar.com/nowater/2018-10/18/18/01c98c8320c7f1567ac409a7a847607d.png"/>
                    </a>
                 </div>
              </div>
            </div>
            {/* 滑动3 */}
            <div className="mould_210">
              <div className="columnList mb15">
               <div className="ml10 mr10 bgfff columnList_con ftc">
                    <a className="db rela">
                      <img className="vux-x-img w100 adcover b-loaded" id="vux-ximg-pefva" style={{height:"116.197px"}} src="http://img2.epetbar.com/2019-04/02/15/1f407a4d384543b008350bef81ace205.jpg?x-oss-process=style/water" />
                      <div className="radian">
                        <img className="db w100" src="assets/img/zz.png" />
                      </div>
                    </a>

                  <div className="pt20 pb10">
                      <div className="swiper-container mySwiper_goodslist swiper-container-initialized swiper-container-horizontal swiper-container-ios">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide swiper-slide-active" style={{width:"98.611px"}}>
                                <a className="db ml15">
                                    <img className="w100"  src="https://img1.epetbar.com/2018-09/12/15/c2793384623aa9f7462c83caf357d9b2.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                    <p className="ntf10 cf0 bold">¥<span className="ft14">319.00</span></p>
                                    <p className="ntf10 c999 textline">¥<span className="ft12">597.60</span></p>
                                    
                                </a>
                            </div>
                            <div className="swiper-slide swiper-slide-active" style={{width:"98.611px"}}>
                                <a className="db ml15">
                                    <img className="w100"  src="https://img1.epetbar.com/2018-04/08/10/f379b04f67e8932493d330bff6597776.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                    <p className="ntf10 cf0 bold">¥<span className="ft14">319.00</span></p>
                                    <p className="ntf10 c999 textline">¥<span className="ft12">597.60</span></p>
                                    
                                </a>
                            </div>
                            <div className="swiper-slide swiper-slide-active" style={{width:"98.611px"}}>
                                <a className="db ml15">
                                    <img className="w100"  src="https://img1.epetbar.com/2018-04/08/10/f379b04f67e8932493d330bff6597776.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                    <p className="ntf10 cf0 bold">¥<span className="ft14">319.00</span></p>
                                    <p className="ntf10 c999 textline">¥<span className="ft12">597.60</span></p>
                                    
                                </a>
                            </div>
                            <div className="swiper-slide swiper-slide-active" style={{width:"98.611px"}}>
                                <a className="db ml15">
                                    <img className="w100"  src="https://img1.epetbar.com/2018-04/08/10/f379b04f67e8932493d330bff6597776.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                    <p className="ntf10 cf0 bold">¥<span className="ft14">319.00</span></p>
                                    <p className="ntf10 c999 textline">¥<span className="ft12">597.60</span></p>
                                    
                                </a>
                            </div>
                            <div className="swiper-slide swiper-slide-active" style={{width:"98.611px"}}>
                                <a className="db ml15">
                                    <img className="w100"  src="https://img1.epetbar.com/2018-04/08/10/f379b04f67e8932493d330bff6597776.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                    <p className="ntf10 cf0 bold">¥<span className="ft14">319.00</span></p>
                                    <p className="ntf10 c999 textline">¥<span className="ft12">597.60</span></p>
                                    
                                </a>
                            </div>
                            <div className="swiper-slide swiper-slide-active" style={{width:"98.611px"}}>
                                <a className="db ml15">
                                    <img className="w100"  src="https://img1.epetbar.com/2018-04/08/10/f379b04f67e8932493d330bff6597776.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                    <p className="ntf10 cf0 bold">¥<span className="ft14">319.00</span></p>
                                    <p className="ntf10 c999 textline">¥<span className="ft12">597.60</span></p>
                                    
                                </a>
                            </div>
                            <div className="swiper-slide swiper-slide-active" style={{width:"98.611px"}}>
                                <a className="db ml15">
                                    <img className="w100"  src="https://img1.epetbar.com/2018-04/08/10/f379b04f67e8932493d330bff6597776.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                    <p className="ntf10 cf0 bold">¥<span className="ft14">319.00</span></p>
                                    <p className="ntf10 c999 textline">¥<span className="ft12">597.60</span></p>
                                    
                                </a>
                            </div>
                            <div className="swiper-slide swiper-slide-active" style={{width:"98.611px"}}>
                                <a className="db ml15">
                                    <img className="w100"  src="https://img1.epetbar.com/2018-04/08/10/f379b04f67e8932493d330bff6597776.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                    <p className="ntf10 cf0 bold">¥<span className="ft14">319.00</span></p>
                                    <p className="ntf10 c999 textline">¥<span className="ft12">597.60</span></p>
                                    
                                </a>
                            </div>
                            
                        </div>
                      </div>
                  </div>
               </div>
              </div>
            </div>

            {/* 滑动广告 */}
            <div className="huadong">
              <div className="mould_215" style={{marginBbottom:"20px"}}> 
                <div className="ml10 mr10 bgfff  ftc brand pt15 pl15 pb15">
                  <div className="swiper-container mySwiper_brand swiper-container-initialized swiper-container-horizontal swiper-container-ios">
                    <div className="swiper-wrapper">  
                        <div className="swiper-slide swiper-slide-active" style={{width:"90px",marginRight:"10px"}}>
                          <a className="db">
                            <img src="https://img2.epetbar.com/nowater/brand_logo/2013-01/18/c9b30036ec5701bb038d0dbb3dfbbc06.jpg?x-oss-process=style/fill&$1=100&$2=50" />
                          </a>
                        </div>
                        <div className="swiper-slide swiper-slide-active" style={{width:"90px",marginRight:"10px"}}>
                          <a className="db">
                            <img src="https://img2.epetbar.com/nowater/brand_logo/2013-01/18/c9b30036ec5701bb038d0dbb3dfbbc06.jpg?x-oss-process=style/fill&$1=100&$2=50" />
                          </a>
                        </div>
                        <div className="swiper-slide swiper-slide-active" style={{width:"90px",marginRight:"10px"}}>
                          <a className="db">
                            <img src="https://img2.epetbar.com/nowater/brand_logo/2013-01/18/c9b30036ec5701bb038d0dbb3dfbbc06.jpg?x-oss-process=style/fill&$1=100&$2=50" />
                          </a>
                        </div>
                        <div className="swiper-slide swiper-slide-active" style={{width:"90px",marginRight:"10px"}}>
                          <a className="db">
                            <img src="https://img2.epetbar.com/nowater/brand_logo/2013-01/18/c9b30036ec5701bb038d0dbb3dfbbc06.jpg?x-oss-process=style/fill&$1=100&$2=50" />
                          </a>
                        </div>
                        <div className="swiper-slide swiper-slide-active" style={{width:"90px",marginRight:"10px"}}>
                          <a className="db">
                            <img src="https://img2.epetbar.com/nowater/brand_logo/2013-01/18/c9b30036ec5701bb038d0dbb3dfbbc06.jpg?x-oss-process=style/fill&$1=100&$2=50" />
                          </a>
                        </div>
                        <div className="swiper-slide swiper-slide-active" style={{width:"90px",marginRight:"10px"}}>
                          <a className="db">
                            <img src="https://img2.epetbar.com/nowater/brand_logo/2013-01/18/c9b30036ec5701bb038d0dbb3dfbbc06.jpg?x-oss-process=style/fill&$1=100&$2=50" />
                          </a>
                        </div>
                        <div className="swiper-slide swiper-slide-active" style={{width:"90px",marginRight:"10px"}}>
                          <a className="db">
                            <img src="https://img2.epetbar.com/nowater/brand_logo/2013-01/18/c9b30036ec5701bb038d0dbb3dfbbc06.jpg?x-oss-process=style/fill&$1=100&$2=50" />
                          </a>
                        </div>
                        <div className="swiper-slide swiper-slide-active" style={{width:"90px",marginRight:"10px"}}>
                          <a className="db">
                            <img src="https://img2.epetbar.com/nowater/brand_logo/2013-01/18/c9b30036ec5701bb038d0dbb3dfbbc06.jpg?x-oss-process=style/fill&$1=100&$2=50" />
                          </a>
                        </div>
                        <div className="swiper-slide swiper-slide-active" style={{width:"90px",marginRight:"10px"}}>
                          <a className="db">
                            <img src="https://img2.epetbar.com/nowater/brand_logo/2013-01/18/c9b30036ec5701bb038d0dbb3dfbbc06.jpg?x-oss-process=style/fill&$1=100&$2=50" />
                          </a>
                        </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* 潮品好物 */}
             <div className="mould_208" style={{background:"rgba(255,255,255,0.8)"}}>
              <div className="title ml10 pr10 flex">
                 <div className="leftimg it3">
                  <a>
                    <img src="https://img2.epetbar.com/nowater/2018-10/18/16/7e71c9ede139faae845bff0c4e61b52a.png" />
                  </a>
                 </div>

                 <div className="rightimg">
                    <a>
                      <img  src="https://img2.epetbar.com/nowater/2018-10/18/18/01c98c8320c7f1567ac409a7a847607d.png"/>
                    </a>
                 </div>
              </div>
            </div>
           {/* 轮播图6 */}
           <div className="lbt6">
            <Carousel afterChange={this.onChange}>
              <div className="lbt6A">
                  <div className="mould_211">
                    <div className="video_slider">
                      <div className="pl10 pr10">
                        <div className="swiper-container mySwiper swiper-container-horizontal swiper-container-ios">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide swiper-slide-active" style={{width:"321.818px",marginRight:"10px"}}>
                                <a className="db rela">
                                  <img src="https://img1.epetbar.com/2018-11/23/13/9ab51720c9833360f743dbec26f1323e.jpg" className="w100 video_cover" style={{height:"190px"}}/>
                                  <div className="vedio_con w100">
                                    <div className="mr20 pr10 floatl">
                                        <div className="ft14 cfff ell w100">
                                        萌王星 ROCKET多功能宠物出行杯
                                        </div>
                                        <div className="cfff tipimg" style={{float:"left"}}>
                                          <span>
                                            <img src="assets/img/view_index.png"/>
                                            <span className="ft10">1317</span>
                                          </span>
                                          <span className="liner"></span>
                                          <span>
                                            <img src="assets/img/time.png" />
                                            <span className="ft10">00:43</span>
                                          </span>
                                        </div>
                                        <img src="assets/img/player.png" className="videobegin" style={{height: "30px"}}/>
                                    </div>
                                  </div>
                                  
                                </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="lbt6A">
                  <div className="mould_211">
                    <div className="video_slider">
                      <div className="pl10 pr10">
                        <div className="swiper-container mySwiper swiper-container-horizontal swiper-container-ios">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide swiper-slide-active" style={{width:"321.818px",marginRight:"10px"}}>
                                <a className="db rela">
                                  <img src="https://img1.epetbar.com/2018-11/23/13/9ab51720c9833360f743dbec26f1323e.jpg" className="w100 video_cover" style={{height:"190px"}}/>
                                  <div className="vedio_con w100">
                                    <div className="mr20 pr10 floatl">
                                        <div className="ft14 cfff ell w100">
                                        萌王星 ROCKET多功能宠物出行杯
                                        </div>
                                        <div className="cfff tipimg" style={{float:"left"}}>
                                          <span>
                                            <img src="assets/img/view_index.png"/>
                                            <span className="ft10">1317</span>
                                          </span>
                                          <span className="liner"></span>
                                          <span>
                                            <img src="assets/img/time.png" />
                                            <span className="ft10">00:43</span>
                                          </span>
                                        </div>
                                        <img src="assets/img/player.png" className="videobegin" style={{height: "30px"}}/>
                                    </div>
                                  </div>
                                  
                                </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="lbt6A">
                  <div className="mould_211">
                    <div className="video_slider">
                      <div className="pl10 pr10">
                        <div className="swiper-container mySwiper swiper-container-horizontal swiper-container-ios">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide swiper-slide-active" style={{width:"321.818px",marginRight:"10px"}}>
                                <a className="db rela">
                                  <img src="https://img1.epetbar.com/2018-11/23/13/9ab51720c9833360f743dbec26f1323e.jpg" className="w100 video_cover" style={{height:"190px"}}/>
                                  <div className="vedio_con w100">
                                    <div className="mr20 pr10 floatl">
                                        <div className="ft14 cfff ell w100">
                                        萌王星 ROCKET多功能宠物出行杯
                                        </div>
                                        <div className="cfff tipimg" style={{float:"left"}}>
                                          <span>
                                            <img src="assets/img/view_index.png"/>
                                            <span className="ft10">1317</span>
                                          </span>
                                          <span className="liner"></span>
                                          <span>
                                            <img src="assets/img/time.png" />
                                            <span className="ft10">00:43</span>
                                          </span>
                                        </div>
                                        <img src="assets/img/player.png" className="videobegin" style={{height: "30px"}}/>
                                    </div>
                                  </div>
                                  
                                </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </Carousel>
            </div>



                {/* 小剧场 */}
                <div className="mould_208" style={{background:"rgba(255,255,255,0.8)"}}>
              <div className="title ml10 pr10 flex">
                 <div className="leftimg it3">
                  <a>
                    <img src="https://img2.epetbar.com/nowater/2018-10/19/15/63e297e32650e7ad39a964e19e6077d6.png" />
                  </a>
                 </div>

                 <div className="rightimg">
                    <a>
                      <img  src="https://img2.epetbar.com/nowater/2018-10/18/18/01c98c8320c7f1567ac409a7a847607d.png"/>
                    </a>
                 </div>
              </div>
            </div>
           {/* 轮播图7 */}
           <div className="lbt6">
            <Carousel afterChange={this.onChange}>
              <div className="lbt6A">
                  <div className="mould_211">
                    <div className="video_slider">
                      <div className="pl10 pr10">
                        <div className="swiper-container mySwiper swiper-container-horizontal swiper-container-ios">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide swiper-slide-active" style={{width:"321.818px",marginRight:"10px"}}>
                                <a className="db rela">
                                  <img src="https://img1.epetbar.com/2019-01/24/14/6efa215cd0c4f004b9f15882dc89c5e6.jpg" className="w100 video_cover" style={{height:"190px"}}/>
                                  <div className="vedio_con w100">
                                    <div className="mr20 pr10 floatl">
                                        <div className="ft14 cfff ell w100">
                                        萌王星 ROCKET多功能宠物出行杯
                                        </div>
                                        <div className="cfff tipimg" style={{float:"left"}}>
                                          <span>
                                            <img src="assets/img/view_index.png"/>
                                            <span className="ft10">1317</span>
                                          </span>
                                          <span className="liner"></span>
                                          <span>
                                            <img src="assets/img/time.png" />
                                            <span className="ft10">00:43</span>
                                          </span>
                                        </div>
                                        <img src="assets/img/player.png" className="videobegin" style={{height: "30px"}}/>
                                    </div>
                                  </div>
                                  
                                </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="lbt6A">
                  <div className="mould_211">
                    <div className="video_slider">
                      <div className="pl10 pr10">
                        <div className="swiper-container mySwiper swiper-container-horizontal swiper-container-ios">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide swiper-slide-active" style={{width:"321.818px",marginRight:"10px"}}>
                                <a className="db rela">
                                  <img src="https://img1.epetbar.com/2018-11/23/13/9ab51720c9833360f743dbec26f1323e.jpg" className="w100 video_cover" style={{height:"190px"}}/>
                                  <div className="vedio_con w100">
                                    <div className="mr20 pr10 floatl">
                                        <div className="ft14 cfff ell w100">
                                        萌王星 ROCKET多功能宠物出行杯
                                        </div>
                                        <div className="cfff tipimg" style={{float:"left"}}>
                                          <span>
                                            <img src="assets/img/view_index.png"/>
                                            <span className="ft10">1317</span>
                                          </span>
                                          <span className="liner"></span>
                                          <span>
                                            <img src="assets/img/time.png" />
                                            <span className="ft10">00:43</span>
                                          </span>
                                        </div>
                                        <img src="assets/img/player.png" className="videobegin" style={{height: "30px"}}/>
                                    </div>
                                  </div>
                                  
                                </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="lbt6A">
                  <div className="mould_211">
                    <div className="video_slider">
                      <div className="pl10 pr10">
                        <div className="swiper-container mySwiper swiper-container-horizontal swiper-container-ios">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide swiper-slide-active" style={{width:"321.818px",marginRight:"10px"}}>
                                <a className="db rela">
                                  <img src="https://img1.epetbar.com/2018-11/23/13/9ab51720c9833360f743dbec26f1323e.jpg" className="w100 video_cover" style={{height:"190px"}}/>
                                  <div className="vedio_con w100">
                                    <div className="mr20 pr10 floatl">
                                        <div className="ft14 cfff ell w100">
                                        萌王星 ROCKET多功能宠物出行杯
                                        </div>
                                        <div className="cfff tipimg" style={{float:"left"}}>
                                          <span>
                                            <img src="assets/img/view_index.png"/>
                                            <span className="ft10">1317</span>
                                          </span>
                                          <span className="liner"></span>
                                          <span>
                                            <img src="assets/img/time.png" />
                                            <span className="ft10">00:43</span>
                                          </span>
                                        </div>
                                        <img src="assets/img/player.png" className="videobegin" style={{height: "30px"}}/>
                                    </div>
                                  </div>
                                  
                                </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </Carousel>
            </div>
            {/* 猜你喜欢 */}
            <div className="mould_208" style={{background:"rgba(255,255,255,0.8)"}}>
              <div className="title ml10 pr10 flex">
                 <div className="leftimg it3">
                  <a>
                    <img src="https://img2.epetbar.com/nowater/2018-10/18/20/3fbb022a3225b959f51312c47f378016.png" />
                  </a>
                 </div>

                 <div className="rightimg">
                    <a>
                      <img  src="https://img2.epetbar.com/nowater/2018-10/18/18/01c98c8320c7f1567ac409a7a847607d.png"/>
                    </a>
                 </div>
              </div>
            </div>


            <div className="xihuang">
                <div className="mould_212">
                  <div className="square_goods">
                    <div className="goodlist">
                      <ul className="pl5 pr5 clearfix">
                        <li className="rela">
                            <div className="square_box">
                                <a className="db pad15">
                                  <img className="vux-x-img goodimg db b-loaded" id="vux-ximg-zgyws"  src="https://img1.epetbar.com/2017-05/16/10/71ba11c54a09089be25f45a31feb430c.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                  <div className="ft12 c333 mt5 mb5 title el2">新西兰原装进口KIWI KITCHENS  鱼肉配方冻干宠物食品 900g</div>
                                  <div className="flex flex-ac flex-pj">
                                  <span data-v-0c7bc348="" className="cf0 nft10 bold ntf10 mt3">¥<span data-v-0c7bc348="" className="ft14">500.00</span></span>
                                  </div>
                                  <div data-v-0c7bc348="" className="Interest"> </div>
                                </a>
                            </div>
                            <div className="cart flex flex-ac flex-pc">
                                <a><img src="assets/img/gouwuche1.png" /></a>
                                
                            </div>
                            

                        </li>

                        <li className="rela">
                            <div className="square_box">
                                <a className="db pad15">
                                  <img className="vux-x-img goodimg db b-loaded" id="vux-ximg-zgyws"  src="https://img1.epetbar.com/2017-05/16/10/71ba11c54a09089be25f45a31feb430c.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                  <div className="ft12 c333 mt5 mb5 title el2">新西兰原装进口KIWI KITCHENS  鱼肉配方冻干宠物食品 900g</div>
                                  <div className="flex flex-ac flex-pj">
                                  <span data-v-0c7bc348="" className="cf0 nft10 bold ntf10 mt3">¥<span data-v-0c7bc348="" className="ft14">500.00</span></span>
                                  </div>
                                  <div data-v-0c7bc348="" className="Interest"> </div>
                                </a>
                            </div>
                            <div className="cart flex flex-ac flex-pc">
                                <a><img src="assets/img/gouwuche1.png" /></a>
                                
                            </div>
                            

                        </li>

                      </ul>
                      </div>
                  </div>

                </div>

            </div>

            <div className="xihuang">
                <div className="mould_212">
                  <div className="square_goods">
                    <div className="goodlist">
                      <ul className="pl5 pr5 clearfix">
                        <li className="rela">
                            <div className="square_box">
                                <a className="db pad15">
                                  <img className="vux-x-img goodimg db b-loaded" id="vux-ximg-zgyws"  src="https://img1.epetbar.com/2017-05/16/10/71ba11c54a09089be25f45a31feb430c.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                  <div className="ft12 c333 mt5 mb5 title el2">新西兰原装进口KIWI KITCHENS  鱼肉配方冻干宠物食品 900g</div>
                                  <div className="flex flex-ac flex-pj">
                                  <span data-v-0c7bc348="" className="cf0 nft10 bold ntf10 mt3">¥<span data-v-0c7bc348="" className="ft14">500.00</span></span>
                                  </div>
                                  <div data-v-0c7bc348="" className="Interest"> </div>
                                </a>
                            </div>
                            <div className="cart flex flex-ac flex-pc">
                                <a><img src="assets/img/gouwuche1.png" /></a>
                                
                            </div>
                            

                        </li>

                        <li className="rela">
                            <div className="square_box">
                                <a className="db pad15">
                                  <img className="vux-x-img goodimg db b-loaded" id="vux-ximg-zgyws"  src="https://img1.epetbar.com/2017-05/16/10/71ba11c54a09089be25f45a31feb430c.jpg?x-oss-process=style/fill&$1=200&$2=200"/>
                                  <div className="ft12 c333 mt5 mb5 title el2">新西兰原装进口KIWI KITCHENS  鱼肉配方冻干宠物食品 900g</div>
                                  <div className="flex flex-ac flex-pj">
                                  <span data-v-0c7bc348="" className="cf0 nft10 bold ntf10 mt3">¥<span data-v-0c7bc348="" className="ft14">500.00</span></span>
                                  </div>
                                  <div data-v-0c7bc348="" className="Interest"> </div>
                                </a>
                            </div>
                            <div className="cart flex flex-ac flex-pc">
                                <a><img src="assets/img/gouwuche1.png" /></a>
                                
                            </div>
                            

                        </li>

                      </ul>
                      </div>
                  </div>

                </div>

            </div>
            
    </div>)
    }
}

export default Home;