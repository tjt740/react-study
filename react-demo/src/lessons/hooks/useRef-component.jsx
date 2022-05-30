import React from "react";

// step1️⃣ 从React中引入useRef函数
import { useRef, useEffect } from 'react';


class ClassCom extends React.Component {
    render() {
        return (
            <>
                <input placeholder="类组件" />
                <h3>类组件</h3>
            </>
        )
    }
}

function UseRefCom() {
    const h1Ref = useRef(null);
    const classRef = useRef(null);
    useEffect(() => {
        console.log(h1Ref);
        h1Ref.current.innerHTML = '哈哈哈'
        // todo: 可以尝试学习 给类组件绑定ref（不能给类组件绑定，可以封装个函数组件，函数组件引入类组件，然后给类组件绑定ref）

        // Tjt: React.findNode()  React.creatRef()

        console.log(classRef)
    }, [])

    return (
        <>
            <h1 ref={h1Ref}>123</h1>
            <ClassCom ref={ classRef } />
        </>
    )


}

class UseRefComponent extends React.Component {


    render() {
        return (
            <div>
                <h1>useRef</h1>
                <UseRefCom />
            </div>
        );
    }

}

export default UseRefComponent;