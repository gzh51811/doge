import React,{Component} from 'react';

import Xfoot from './Component/footer';

import MyRouter from './Router/index.js';


class App extends Component{
    render(){
        return(
            <div>
                <MyRouter/>
                <Xfoot></Xfoot>
            </div>
                       
        )
    }
        
    
}




export default App;