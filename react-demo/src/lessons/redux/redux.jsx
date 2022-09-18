import React, { useState } from "react";
import store from '../../store/index.js';
import Son from './son-component';
function ComA() {
    const [str, setStr] = useState('');
    return (
            <>
            {/* 监听store变化 */}
                <h1>{str}</h1>
                <button onClick={() => {

                    // 触发事件
                    store.dispatch({ type: 'getWife', payload: '740' })
                    setStr(store.getState().wife)
            }}> getWife </button>
            
            <Son></Son>
            </>
    )
}

class ReduxComponent extends React.Component {
    state = {
        num: 0
    }
    render() {
        return (
            <div>
                {/* 类组件 */}
                {this.state.num}
                <button onClick={() => {
                    // 触发事件
                    store.dispatch({ type: 'addNum', payload: 1 })
                    // 监听store变化
                    console.log(store.getState())
                    this.setState({ num: store.getState().num });
                }}> num++ </button>

                {/* 函数组件使用redux */}
                <ComA></ComA>

            </div>
        );
    }
}


export default ReduxComponent