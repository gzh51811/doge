import React  from 'react';

class Xhead extends React.Component{
    constructor(){
        super()
        this.state = {
            showMore:false
        }
    }
    gohome(){
        this.props.history.push('/home')
    }
    golist(){
        this.props.history.push('/goods')
    }
    gocart(){
        this.props.history.push('/cart')
    }
    gomine(){
        this.props.history.push('/mine')
    }
    
    render(){
        // console.log(this.props)
        return (
            <div className={['header-quick', 'header-quicknew','Jtk',this.props.showMore && 'headHide'].join(' ')}>
                <a href="javascript:;" onClick={this.gohome.bind(this)}>
                    <span className="icon1"></span>
                    <p>首页</p>
                </a>
                <a href="https://wap.epet.com/category.html" onClick={this.golist.bind(this)}>
                    <span className="icon2"></span>
                    <p>商品分类</p>
                </a>
                <a href="https://wap.epet.com/cart/" onClick={this.gocart.bind(this)}>
                    <span className="icon4" id="getCartNum"></span>
                    <p>购物车</p>
                </a>
                <a href="https://wap.epet.com/app/user" onClick={this.gomine.bind(this)}>
                    <span className="icon5"></span>
                    <p>我的e宠</p>
                </a>
            </div>
        )
    }
}

export default Xhead;