import React from "react";



class ComB extends React.Component { 
  
    constructor(props) {
        super(props);
        console.log('ComB--constructor');
    }
    componentWillUnmount() {
        console.log('ComB 卸载组件时触发--componentWillUnmount');
        const {clearInterval } = this.props;
        clearInterval()
    }
    componentDidMount() {
        console.log('ComB--componentDidMount');
    }

   
    render() {
        console.log(this.props)
        console.log('ComB--render')
        return (
            <div>
                <h2>类子组件B</h2>
            </div>
        );
    }
}


export default ComB