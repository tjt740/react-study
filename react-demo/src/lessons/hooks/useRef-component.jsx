import React from 'react';

// step1️⃣ 从React中引入useRef函数
import { useRef, useEffect } from 'react';


function UseRefCom() {
    const h1Ref = useRef(null);

    useEffect(() => {
        h1Ref.current.innerHTML = '哈哈哈';
        // 🔊 1.通过useRef获取DOM元素
        console.log(h1Ref);
      
    }, []);

    return (
        <>
            <h1 ref={h1Ref}>123</h1> 
        </>
    );
}

class UseRefComponent extends React.Component {
    componentDidMount() {
        // 🔊通过React.creatRef()获取DOM元素
        console.log('this.btn1:', this.btn1);

        // 🔊通过原生方法获取DOM元素
        const h1 = document.getElementById('h1');
        console.log('h1:', h1);
    }

    constructor() {
        super();
        // 1- 创建了一个 ref
        this.btn1 = React.createRef();
    }

    data = '';
    render() {
        return (
            <div>
                <h1 id='h1'>useRef</h1>
                <UseRefCom />

                <button ref={this.btn1}>谭金涛</button>



                <button onClick={() => { this.data = {name:'谭金涛',age:'23'} }}> 设置参数</button>
            </div>
        );
    }
}

export default UseRefComponent;
