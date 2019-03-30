import React,{Component} from 'react';
import Home from '../pages/Home/Home';
import Register from '../pages/Register-Login/Register';
import Login from '../pages/Register-Login/Login';
import List from '../pages/List/List';
import Goods from '../pages/Goods/Goods';
import Cart from '../pages/Cart/Cart';
import Mine from '../pages/Mine/Mine';
import Xfoot from '../Component/footer';




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
    render(){
        return (          
            <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/list' component={List}/>
                    <Route path='/goods' component={Goods}/>
                    <Route path='/cart' component={Cart}/>
                    <Route path='/meng' render={()=><div>萌爪联盟<Xfoot></Xfoot></div>}/>
                    <Route path='/mine' component={Mine}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/login' component={Login}/>
                    <Redirect from='/' to='/home' exact/>
                    <Redirect to="/404"/>
                </Switch>
        )
    }
}
myRouter = withRouter(myRouter);
export default myRouter;