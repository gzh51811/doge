import React,{Component}  from 'react';
import { withRouter } from 'react-router-dom';


class Mine extends Component {
    constructor(){
        super();

    }
    jumplogin(){
        console.log('跳转到购物车');
        console.log( this.props.history);
        this.props.history.push('/login')

    }
    render(){
        return(
            <div>
                <p style={{width:'30px',height:'30px',border:'1px solid #000'}} onClick={this.jumplogin.bind(this)}>登录</p>
                <p>注册</p>

            </div>
        );
    }
}
Mine=withRouter(Mine);
export default Mine;