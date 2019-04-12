import React,{Component}  from 'react';
import { withRouter } from 'react-router-dom';
import './mine.css'

class Mine extends Component {
    constructor(){
        super()
    }
    gologin(){
        this.props.history.push('/login')

    }
    goreg(){
        this.props.history.push('/register')

    }
    render(){
        return(
            <div className="mine">
                <div data-v-43e6a033="" id="user" className="router-view">
                    <div data-v-43e6a033="" className="user-header">
                        <img data-v-43e6a033="" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=988369012,233932232&fm=26&gp=0.jpg" className="avatar" /> 
                        <div data-v-43e6a033="" className="noLogin">
                            <a data-v-43e6a033="" href="javascript:;" className="user-btn" onClick={this.gologin.bind(this)}>登录</a> 
                            <a data-v-43e6a033="" href="javascript:;" className="user-btn" onClick={this.goreg.bind(this)}>注册</a>
                        </div>
                    </div> 
                    <div data-v-43e6a033="" className="user-content">
                        <div data-v-43e6a033="" className="link-group">
                            <a data-v-43e6a033="" href="javascript:;" className="link">
                                <i data-v-43e6a033="" className="iconfont"></i> 
                                <span data-v-43e6a033="">我发布的</span>
                            </a> 
                            <a data-v-43e6a033="" href="javascript:;" className="link">
                                <i data-v-43e6a033="" className="iconfont"></i> 
                                <span data-v-43e6a033="">我想要的</span>
                            </a>
                        </div> 
                        <div data-v-43e6a033="" className="link-group">
                            <a data-v-43e6a033="" href="javascript:;" className="link">
                                <i data-v-43e6a033="" className="iconfont"></i> 
                                <span data-v-43e6a033="">个人资料</span>
                            </a>
                        </div>
                        <div data-v-43e6a033="" className="link-group">
                            <a data-v-43e6a033="" href="javascript:;" className="link">
                                <i data-v-43e6a033="" className="iconfont"></i> 
                                <span data-v-43e6a033="">设置</span>
                            </a>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}
Mine=withRouter(Mine);
export default Mine;