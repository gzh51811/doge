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
                    name:'List',
                    path:'/list',
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
            current:'1'
        }
    }
    handleClick = (e) => {        
        this.setState({
          current: e.key,
        },
        ()=>{
            this.props.history.push('/' + e.key.toLowerCase())           
        });
        console.log('click ', e,e.key,6666,this.state.current);
    }
    render(){
        return (            
            <div className='container'>
                <Menu 
                    onClick={this.handleClick} 
                    selectedKeys={[this.state.current]} 
                    mode='horizontal'
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
    }
}

Xfoot = withRouter(Xfoot);
export default Xfoot;