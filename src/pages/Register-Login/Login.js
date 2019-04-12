import React,{Component}  from 'react';

import './register.css';
import { Input, Icon } from 'antd';

import { withRouter } from 'react-router-dom';
import withAxios from '../../hoc/withAxios.js';

class Login extends Component {
    constructor(){
        super();
        this.state={
            uname:'',
            psw:'',
            rednone:false
        }
    }
    loginchange(fntype,e){
        if(fntype=='loginuser'){
            this.setState({
                uname:e.target.value
            },()=>{
                this.judgeinput();
            })         
        }
        else if(fntype=='loginpassword'){
            this.setState({
                psw:e.target.value
            },()=>{
                this.judgeinput();
            })         
        }
    }
    judgeinput(){
        if(this.state.uname&&this.state.psw){      
            this.setState({
                rednone:true
            });
        }
        else{
            this.setState({
                rednone:false
            });
        }
    }
    tologin(){
        if(this.state.uname&&this.state.psw){
            // console.log('登录');
            var params = new URLSearchParams();
            params.append('user',this.state.uname);
            params.append('password',this.state.psw);         
            this.props.axios({
                method: "post",
                url: "http://47.107.182.207:3002/login",
                data: params
            }).then(res => {
                // console.log('数据',res);
                if(res){
                    var userobj ={};
                    userobj["token"] = res.data.token;
                    userobj["uname"] = res.data.uname;
                    // userobj["logintime"] = res.data.logintime;
                    localStorage.setItem( "user", JSON.stringify(userobj) );
                    this.props.history.push('/home');
                }    
            });
        }
        else{
            alert(11)
        }
        
    }
    goBack(){
        this.props.history.goBack();  
    }
    render(){
        return(
            <div data-v-b742e1ea="" id="register" className="router-view">
                <div data-v-b773d4b4="" data-v-b742e1ea="" className="header topbar"> 
                    <div data-v-b773d4b4="" className="">
                        <a 
                            href="javascript:void(0)" 
                            className="aback page-top go-back left-more"
                            onTouchEnd={this.goBack.bind(this)}
                        ></a> 
                        <span data-v-b773d4b4="">登录</span>
                    </div>
                </div>
                <div style={{padding:"10px"}}>                        
                    <Input
                        placeholder="请输入你的用户名"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        value={this.state.uname}
                        onChange={this.loginchange.bind(this,'loginuser')}
                        ref={node => this.userNameInput = node}
                    />
                    <Input.Password 
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>} 
                        placeholder="请输入密码" 
                        value={this.state.psw}
                        onChange={this.loginchange.bind(this,'loginpassword')}
                    />
                </div> 
                <div data-v-cd5f8684="" >
                    <a data-v-cd5f8684="" href="javascript:;" className="dark-btn ft16 round5 block ftc delay5 animated bounceInRight nextStep" style={{color:'#fff',background:this.state.rednone?'red':'#ccc'}} onClick={this.tologin.bind(this)}>
                        登录
                    </a>
                </div>
                
            </div>      
        )
    }


}
Login=withRouter(Login);
Login=withAxios(Login);

export default Login;