import React from 'react';

// step1️⃣ 从React中引入useRef函数
import { useRef, useEffect } from 'react';

function UseRefCom() {
    // 3- 创建useRef DOM
    const h1Ref = useRef(null);

    let elementNode;
    useEffect(() => {
        h1Ref.current.innerHTML = '哈哈哈';
        // 🔊 3- 通过useRef获取DOM元素
        console.log('h1Ref:', h1Ref);
        console.log(elementNode)
        
    }, []);

    return (
        <>
            <h1 ref={h1Ref}>123</h1>
            <h3 ref={(ele) => elementNode=ele}>456</h3>
        </>
    );
}

class UseRefComponent extends React.Component {
    componentDidMount() {
        // 🔊1- 通过React.creatRef()获取DOM元素
        // console.log('this.btn1:', this.btn1);

        // 🔊2- 通过原生方法获取DOM元素
        const h1 = document.getElementById('h1');
        console.log('h1:', h1);

        // console.log('this.btn1:', this.btn1);

        // console.log('elementNode:', this.elementNode);
    }

    constructor() {
        super();
        // 1- 创建了一个 ref
        this.btn1 = React.createRef();    
    }

    elementNode;


    render() {
        return (
            <div>
                <h1 id="h1">useRef</h1>
                {/* <UseRefCom /> */}
                {/* <button ref={this.btn1}>谭金涛</button> */}

                {/* <h3 ref={(element)=>this.elementNode = element}>1234</h3> */}

            </div>
        );
    }
}

export default UseRefComponent;
