import React,{Component}  from 'react';

import { Input, Icon ,Alert} from 'antd';
import withAxios from '../../hoc/withAxios';

import './register.css';


class Register extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            isok:[false,false],
            alertShow:true,
            description:''
        };
    }
    
    goBack(){
        this.props.history.goBack();  
    }
    onChangeUserName = (e) => {
        // console.log(this.props)
        this.setState({ 
            userName: e.target.value 
        },()=>{
            //正则用//包起来
            var regex = /^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$/; 
            if (this.state.userName) {
            //react使用正则表达式变量的test方法进行校验，直接使用value.match(regex)显示match未定义
                if (regex.test(this.state.userName)) {
                    this.refs.userCheck.innerHTML = '';
                    let isok = true;
                    this.myisok(0,isok)
                }else { 
                    this.refs.userCheck.innerHTML = '请输入11位手机号码';
                    this.refs.userCheck.style.color = '#CC3333';
                    let isok = false;
                    this.myisok(0,isok)
                }
            }else {
                this.refs.userCheck.innerHTML = '手机号码不能为空';
                this.refs.userCheck.style.color = '#CC3333';
                let isok = false;
                this.myisok(0,isok)
            }
        });
    }
    myisok(idx,isok){
        let arr = [...this.state.isok]
        arr[idx] = isok
        this.setState({
            isok:arr
        },()=>{
            if(this.state.isok.every(item=>item)){
                this.refs.reg.style.background = '#CC3333';
                this.refs.reg.style.color = '#fff'
            }else{
                this.refs.reg.style.background = '#CCc';
                this.refs.reg.style.color = '#666'
            }
        })       
    }
    onChangepwdName = (e) => {
        this.setState({ 
            password: e.target.value 
        },()=>{
            const form = this.props.form;
            //正则用//包起来
            var regex = /^\w{6,12}$/; 
            if (this.state.password) {
            //react使用正则表达式变量的test方法进行校验，直接使用value.match(regex)显示match未定义
                if (regex.test(this.state.password)) {
                    this.refs.pwdCheck.innerHTML = '';
                    let isok = true;
                    this.myisok(1,isok)
                }else { 
                    this.refs.pwdCheck.innerHTML = '请输入6-12位字母、下划线、数字';
                    this.refs.pwdCheck.style.color = '#CC3333';
                    let isok = false;
                    this.myisok(1,isok)
                }
            }else {
                this.refs.pwdCheck.innerHTML = '密码不能为空';
                this.refs.pwdCheck.style.color = '#CC3333';
                let isok = false;
                this.myisok(1,isok)
            }
        });
    }
    reg(){
        // console.log(111)
        if(this.state.isok.every(item=>item)){
            var params = new URLSearchParams();
            params.append('user',this.state.userName);
            params.append('pwd',this.state.password);
            this.props.axios({
                method: "post",
                url: "http://47.107.182.207:3002/reg",
                data: params
            }).then(res => {
                // console.log(res)
                if(res.data.code == 200){
                    this.setState({
                        alertShow : true,
                    })
                    this.props.history.push('/login')
                }else if(res.data.code == 100){
                    this.setState({
                        alertShow : false,
                        description:'用户名已存在'
                    })
                }           
            });
        }

    }
    showAlert(){
        this.setState({
            alertShow : true,
        })
    }
    render(){
        const { userName } = this.state;
        return (
            <div data-v-b742e1ea="" id="register" className="router-view">
                <div data-v-b773d4b4="" data-v-b742e1ea="" className="header topbar head-top"> 
                    <div data-v-b773d4b4="" className="">
                        <a 
                            href="javascript:void(0)" 
                            className="aback page-top go-back left-more"
                            onTouchEnd={this.goBack.bind(this)}
                        ></a> 
                        <span data-v-b773d4b4="">注册</span>
                    </div>
                </div>
                <div style={{padding:"10px",marginTop:'15px'}}>                        
                    <Input
                        placeholder="请输入你的用户名"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        value={userName}
                        onChange={this.onChangeUserName}
                    />
                    <span className='userCheck' ref='userCheck'></span>
                    <Input.Password 
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>} 
                        placeholder="请输入密码" 
                        onChange={this.onChangepwdName}
                    />
                    <span className='pwdCheck' ref='pwdCheck'></span>
                </div> 
                <div data-v-cd5f8684="">
                    <a 
                        data-v-cd5f8684="" 
                        href="javascript:;" 
                        className="dark-btn ft16 round5 block ftc delay5 animated bounceInRight nextStep"
                        onTouchEnd={this.reg.bind(this)}
                        ref='reg'
                    >注册</a>
                </div>
                <div id="alertwin" className={['',this.state.alertShow && 'hide'].join(' ')} onTouchEnd={this.showAlert.bind(this)}>
                    <Alert
                        message='QAQ'
                        description={this.state.description}
                        type="info"
                        showIcon
                        />
                </div>
            </div>
        )
    }
}

Register = withAxios(Register)
export default Register;