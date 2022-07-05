import React from 'react';
import SonCopyComponent from './son-copy-component';
// 函数子组件
function FunSonComponent(props) {
    console.log('父级参数:', props);
    // step4 子组件绑定change事件
    let inputChange = (e) => {
        console.log('e', e);
        // step5 子组件调用父级组件上的回调函数
        props.cb(e.target.value);
    };
    return (
        <>
            子组件改变数据:
            <input
                type="text"
                defaultValue={props.msg}
                onChange={(e) => {
                    inputChange(e);
                }}
            />
        </>
    );
}

class SonToFatherComponent extends React.Component {
    // step1 创建父级数据（子传父可以忽略）
    state = {
        oldMsg: '父级旧数据',
    };

    // step2 设置父级回调函数 (核心)
    changeFatherMsg = (newData) => {
        console.log('子组件传入的数据:', newData);
        this.setState({
            oldMsg: newData
        })
    };

    render() {
        return (
            <div>

                <p>父级数据: {this.state.oldMsg}</p>
                {/* step3 子组件挂载父级回调函数 */}
                <FunSonComponent
                    msg={this.state.oldMsg}
                    cb={this.changeFatherMsg}
                />

                <SonCopyComponent
                    msg={this.state.oldMsg}
                    cb={this.changeFatherMsg}
                />
                
            </div>
        );
    }
}
export default SonToFatherComponent;
