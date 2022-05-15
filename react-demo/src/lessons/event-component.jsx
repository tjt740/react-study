import React from 'react';

class EventComponent extends React.Component {
    // 函数声明
    handleClick3() {
        console.log('触发事件3')
    }

    // 箭头函数
    handleClick4 = (val)=> {
        console.log('触发事件4',val)
    }

    // 函数声明接收参数
    handleClick5(val, event) {
        console.log('接受传参:', val, event)  // 谭金涛 , Event参数 
    }


    render() {
        return (
            <div>
                {/* 行内匿名函数 */}
                <button onClick={function () { console.log('触发事件1') }}>点击触发事件1</button>

                {/* 行内箭头函数 */}
                <button onClick={() => { console.log('触发事件2') }}>点击触发事件2</button>

                {/* 函数声明 */}
                <button onClick={this.handleClick3}>点击触发事件3</button>

                {/* 箭头函数 */}
                <button onClick={this.handleClick4}>点击触发事件4</button>

                {/* 函数声明携参 */}
                <button onClick={this.handleClick5.bind(this, '谭金涛')}>点击触发事件5并传参</button>
           
            </div>
        );
    }


};


export default EventComponent;