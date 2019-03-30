import React,{Component} from 'react';
import Home from '../pages/Home/Home';
import Register from '../pages/Register-Login/Register';
import Login from '../pages/Register-Login/Login';
import List from '../pages/List/List';
import Goods from '../pages/Goods/Goods';
import Cart from '../pages/Cart/Cart';
import Mine from '../pages/Mine/Mine';


import { Menu, Icon } from 'antd';



import { Route,Redirect,Switch,withRouter } from 'react-router-dom';

class myRouter extends Component{
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
            current:'Home'
        }
    }
    handleClick = (e) => {
        // console.log('click ', e,'this',this);
        this.setState({
          current: e.key,
        },
        ()=>{
            this.props.history.push('/' + e.key.toLowerCase())
        });
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
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/list' component={List}/>
                    <Route path='/goods' component={Goods}/>
                    <Route path='/cart' component={Cart}/>
                    <Route path='/meng' render={()=><div>萌爪联盟</div>}/>
                    <Route path='/mine' component={Register}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/login' component={Login}/>
                    <Redirect from='/' to='/home' exact/>
                    <Redirect to="/404"/>
                </Switch>
            </div>
        )
    }
}
myRouter = withRouter(myRouter);
export default myRouter;