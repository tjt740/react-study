
import React from 'react';

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

    render() {
        return (
            <div>

                {/* 给input表单绑定初始值，并添加change事件 */}
                <input value={this.state.message} onChange={this.handleChange} />

            </div>
        );
    }

}


export default FormComponent;