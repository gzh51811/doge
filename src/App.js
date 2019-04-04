import React,{Component} from 'react';

import Xfoot from './Component/footer';
import MyRouter from './Router/index.js';
import {connect} from 'react-redux';


class App extends Component{
    render(){
        return(
            <div style={{height:"100%"}}>
                <MyRouter/>            
                <Xfoot></Xfoot>                
            </div>
                       
        )
    }
    
        
}

// const mapStateToProps = (state)=>{
//     return {
//         cartlen:state.cartlist.length
//     }
// }

// App = connect(mapStateToProps)(App);

export default App;