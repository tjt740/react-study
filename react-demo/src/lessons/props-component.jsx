import React from "react";

// step1️⃣ 引入 PropTypes
import PropTypes from 'prop-types'


// step3️⃣ 函数子组件接收父级数据
const PropsTypeChildrenComponent = ({ list, json, ele }) => {
    return (
        <>
            {list.map(v => (<p key={v}>{v}</p>))}
            {ele}
            {JSON.stringify(json)}
        </>
    )
}


// step4️⃣ 校验规则
// 不报错✅
PropsTypeChildrenComponent.propTypes = {
    
    /*
    🧡💛💚💙常见的props校验💙💚💛🧡
        PropTypes.array,
        PropTypes.bool,
        PropTypes.func,
        PropTypes.number,
        PropTypes.object,
        PropTypes.string,
        PropTypes.symbol,
        PropTypes.shape({
            key1: PropTypes.string,
            key2: PropTypes.number,
            key3:PropTypes.any
            ...
        })
        PropTypes.element,
        PropTypes.isRequired,
        PropTypes.array.isRequired,
    */

    list: PropTypes.array.isRequired,
    json: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
        work:PropTypes.any,
    }),
    ele: PropTypes.element
}
// 报错❌
// PropsTypeChildrenComponent.propTypes = {
//     list: PropTypes.string
// }


class PropsTypeComponent extends React.Component {

    state = {
        list: [1, 2, 3, 4, 5],
        json: {
            name: '谭金涛',
            age: 23,
            work: 'it'
        },
        ele: <h1>哈哈哈</h1>
    }
    render() {
        return (
            <div>
                {/* step2️⃣ 在函数子组件上挂载 要传入的数据 */}
                <PropsTypeChildrenComponent
                    list={this.state.list}
                    json={this.state.json}
                    ele={this.state.ele}
                />
            </div>
        );
    }
}

export default PropsTypeComponent;