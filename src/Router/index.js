import React from 'react';
import Home from '../pages/Home/Home';
import Register from '../pages/Register-Login/Register';
import Login from '../pages/Register-Login/Login';
import Goods from '../pages/Goods/Goods';
import Cart from '../pages/Cart/Cart';
import Mine from '../pages/Mine/Mine';
import Details from '../pages/Details/Details';
import Notfound from '../pages/NotFound/notfound.js';



import { Route,Redirect,Switch,withRouter } from 'react-router-dom';
let myRouter =()=>{
    return (          
        <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/goods' component={Goods}/>
                <Route path='/cart' component={Cart}/>
                <Route path='/meng' render={()=><div>萌爪联盟</div>}/>
                <Route path='/mine' component={Mine}/>
                <Route path='/register' component={Register}/>
                <Route path='/login' component={Login}/>
                <Route path='/details/:gid' component={Details}/>
                <Redirect from='/' to='/home' exact/>
                <Redirect to="/404" component={Notfound}/>
            </Switch>
    )
}
myRouter = withRouter(myRouter);
export default myRouter;