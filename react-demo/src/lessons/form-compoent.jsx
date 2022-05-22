
import React, { createRef } from 'react';

class FormComponent extends React.Component {

    // 初始化input表单数据
    state = {
        message: '谭金涛',
    }

    // input change事件
    handleChange = (e) => {
        console.log('e.target.value:', e.target.value);
        this.setState({
            message: e.target.value
        })
    }


    // 1. 使用createRef产生一个存放dom的对象容器
    msgRef = createRef()

    // 3. 获取ref上参数信息
    changeHandler = () => { 
        console.log(this.msgRef.current.value);
    }
    render() {
        return (
            <div>

                {/* 给input表单绑定初始值，并添加change事件 */}
                <input value={this.state.message} onChange={this.handleChange} />

                {/* 2. ref绑定 获取真实dom */}
                <input ref={this.msgRef} />
                <button onClick={this.changeHandler}>获取ref参数</button>


            </div>
        );
    }

}


export default FormComponent;