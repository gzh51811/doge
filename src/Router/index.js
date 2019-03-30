import React from 'react';
import Home from '../pages/Home/Home';
import Register from '../pages/Register-Login/Register';
import Login from '../pages/Register-Login/Login';
import List from '../pages/List/List';
import Goods from '../pages/Goods/Goods';
import Cart from '../pages/Cart/Cart';
import Mine from '../pages/Mine/Mine';




import { Route,Redirect,Switch,withRouter } from 'react-router-dom';
let myRouter =()=>{
    return (          
        <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/list' component={List}/>
                <Route path='/goods' component={Goods}/>
                <Route path='/cart' component={Cart}/>
                <Route path='/meng' render={()=><div>萌爪联盟</div>}/>
                <Route path='/mine' component={Mine}/>
                <Route path='/register' component={Register}/>
                <Route path='/login' component={Login}/>
                <Redirect from='/' to='/home' exact/>
                <Redirect to="/404"/>
            </Switch>
    )
}
myRouter = withRouter(myRouter);
export default myRouter;