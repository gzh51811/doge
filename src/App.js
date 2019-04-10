import React,{Component} from 'react';

import Xfoot from './Component/footer';

import MyRouter from './Router/index.js';


class App extends Component{
    render(){
        return(
            <div style={{height:'100%'}}>
                <MyRouter/>
                <Xfoot></Xfoot>
            </div>
                       
        )
    }
        
    
}




export default App;