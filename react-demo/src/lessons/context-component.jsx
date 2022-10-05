import React from "react";



// step1️⃣ 创建Context对象 导出 Provider 和 Consumer对象
const { Provider, Consumer } = React.createContext();

// 孙子组件
function GrandsonComponent() {
    return (
        <div>
            <h4>我是孙子组件</h4>
            {/* step3️⃣ 固定格式: 使用Consumer包裹 data return获取数据 */}
            祖父组件的数据→
            <Consumer>
                {data =>
                    <input type='textarea' defaultValue={data} />
                }
            </Consumer>
        </div>
    );
}


// 父级组件
function FatherComponent() {
    return (
        <div>
            <h3>我是父亲组件</h3>
            <hr />
            <GrandsonComponent />
        </div>
    )
}



// 祖父组件 
class ContextComponent extends React.Component {
    state = {
        msg: '我是祖父数据',

    }
    render() {
        return (
            // step2️⃣ 固定写法,provider包裹在根组件并提供数据
            <Provider value={this.state.msg}>
                <div>
                    <h2>我是祖父组件</h2>
                    <hr />
                    <FatherComponent />
                </div>
            </Provider>
        );
    }
}


export default ContextComponent;