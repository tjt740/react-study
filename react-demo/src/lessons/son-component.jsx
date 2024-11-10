import React from "react";


class SonClassComponent extends React.Component { 
    
    render() {
        return (
            <div>
                
                <h1>class子组件</h1>
                <p>我接收到的父组件参数</p>
                { console.log(this.props)}
                <input type='textarea' defaultValue={this.props.fatherInfo1} />
                
                <input type='textarea' defaultValue={this.props.fatherInfo2} />
                
            </div>
        );
    }
}

export default SonClassComponent;