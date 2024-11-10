import React from 'react';



import Brother1Component from './brother1-component';
import Brother2Component from './brother2-component';




function Brother3Component(props) {
    return (
        <>
   
            兄弟3接收兄弟1组件的值:
            <h1>{props.data.msg}</h1>
        </>
    )
}



class BrotherComponent extends React.Component {


    // step4️⃣ state中监听的函数
    fn = (params) => {
        console.log('通过回调函数获取到的兄弟1参数:', params);

        // step5️⃣ 给state设置数据
        this.setState({
            msg: params
        })
    }

    // step1️⃣ 定义初始数据
    state = {
        msg: null,
        fun: this.fn
    }


    render() {
        return (
            <>
                {/* step2️⃣ 给兄弟1组件用自定义属性绑定state(数据+事件)*/}
                <Brother1Component cb={this.state} />

                {/* step3️⃣ 给兄弟2组件用自定义属性绑定state(数据) */}
                <Brother2Component info={this.state.msg} />


                <Brother3Component data={this.state} />


            </>
        );
    }

}



export default BrotherComponent;