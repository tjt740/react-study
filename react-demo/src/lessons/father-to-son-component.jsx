import React from 'react';
import SonClassComponent from './son-component';

// 函数组件
function SonFunComponent(props) {
    return (
        <>
            <h1>function 子组件 </h1>
            {console.log(props)}
            <input type='text' defaultValue={props.fatherInfo3} />
        </>

    )
}


// 类组件
class FatherToSonComponent extends React.Component {

    fatherValue = '没写在state中父级数据'

    state = {
        fatherMsg: '我是state中父组件的数据',
    }


    render() {
        return (
            <div>

                {/* 父传子 类组件 */}
                <SonClassComponent fatherInfo1={this.state.fatherMsg} fatherInfo2={this.fatherValue} />

                {/* 父传子 函数组件 */}
                <SonFunComponent fatherInfo3={this.fatherValue} />

            </div>
        );
    }
}


export default FatherToSonComponent