import React, { useState, useEffect, useRef } from 'react';
import SonCom from '../son';
import './index.css';
export default function FatherCom() {
    const [isShow, setIsShow] = useState(false);
    const h1Ref = useRef(null);
    const sonContainer = useRef(null);

    useEffect(() => {
        console.log('h1Ref:', h1Ref);
        console.log('子级节点元素=>>>', sonContainer); // 无法获取到自定义组件
    }, []);
    return (
        <>
            <h1 ref={h1Ref}> 我是父组件 </h1>
            <button>点击打开弹窗</button>
            <div>
                <SonCom ref={sonContainer} />
            </div>
        </>
    );
}
