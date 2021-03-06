import React,{Component} from 'react';
import { Menu, Icon } from 'antd';

import { withRouter } from 'react-router-dom';

class Xfoot extends Component{
    constructor(){
        super();
        this.state = {
            navs:[
            {
                text:'首页',
                name:'Home',
                path:'/home',
                icon:'home'
            },
            {
                text:'分类',
                name:'Goods',
                path:'/goods',
                icon:'bars'
            },
            {
                text:'萌爪联盟',
                name:'Meng',
                path:'/meng',
                icon:'crown'
            }, 
            {
                text:'购物车',
                name:'Cart',
                path:'/cart',
                icon:'shopping-cart'
            },
            {
                text:'我的E宠',
                name:'Mine',
                path:'/mine',
                icon:'smile'
            }
            ],
            current:'Home',
        }
    }
    handleClick = (e) => { 
        console.log('e',e)
        this.setState({
            current: e.key
        },
        ()=>{ 
            console.log('click ', e,e.key,5555,this.state.current);
            this.props.history.push('/' + e.key.toLowerCase()) 
        });

    }
    render(){ 
        let { location } = this.props;
        let pathArr = ['/login','/register','/details/:gid','/goods','/cart'];
        if(pathArr.indexOf(location.pathname) === -1){
            return ( 
                <div className='container footershow' style={{height:'58px'}}>
                <Menu 
                onClick={this.handleClick} 
                selectedKeys={[this.state.current]} 
                mode='horizontal' ref='currentdom'
                >
                {
                    this.state.navs.map(item=>
                        <Menu.Item key={item.name}>
                        <Icon type={item.icon}/>
                        {item.text}
                        </Menu.Item>)
                }
                </Menu> 
                </div>
                )
        }else{
            return ( 
                <div className='container'></div>
                )
        }
    }
}

Xfoot = withRouter(Xfoot);
export default Xfoot;