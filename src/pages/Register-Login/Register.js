import React,{Component}  from 'react';

import { Input, Icon } from 'antd';

import './register.css';
import './all.css';


class Register extends Component{
    constructor(props) {
        super(props);
        this.state = {
          userName: '',
        };
    }
    
    emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
    }

    onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
    }
    render(){
        const { userName } = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        return (
            <div data-v-b742e1ea="" id="register" className="router-view">
                <div data-v-b773d4b4="" data-v-b742e1ea="" className="header topbar"> 
                    <div data-v-b773d4b4="" className="normal-header">
                        <a data-v-b773d4b4="" href="javascript:;" className="back-btn top-bar-btn">
                            <i data-v-b773d4b4="" className="iconfont"><b>&lt;</b></i>
                        </a> 
                        <span data-v-b773d4b4="">注册</span>
                    </div>
                </div>
                <div style={{padding:"10px"}}>                        
                    <Input
                        placeholder="请输入你的用户名"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        suffix={suffix}
                        value={userName}
                        onChange={this.onChangeUserName}
                        ref={node => this.userNameInput = node}
                    />
                    <Input.Password prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>} placeholder="请输入密码" />
                </div> 
                <div data-v-cd5f8684="">
                    <a data-v-cd5f8684="" href="javascript:;" className="dark-btn ft16 round5 block ftc delay5 animated bounceInRight nextStep">下一步</a>
                </div>
                
            </div>
        )
    }
}
export default Register;