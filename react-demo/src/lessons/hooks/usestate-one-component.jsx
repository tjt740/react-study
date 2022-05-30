import React from 'react';
import { useState, useEffect } from 'react';

function UsestateCom() {
    // 🔊注意点1 setState 是替换不是合并。
    const [count, setCount] = useState({
        num1: 0,
        num2: 0,
    });


    // 🔊注意点2 useState里可以写逻辑来生成默认值。
    const [flag, setFlag] = useState(() => {  
        return !!'对对对'
    })


    

    return (
        <>
            
            {/* 📢注意点1  */}
            <p>num1:{count.num1}</p>
            {/* ❌因为setState是替换，不是合并，所以这里的结果是 count={num1: ++1},并没有num2属性 */}
            <button onClick={() => setCount({ num1: count.num1 + 1 })}>
                num1++
            </button>
            <p>num2:{count.num2}</p>
            {/* 改写✅  */}
            <button onClick={() => setCount({ ...count, num2: count.num2 + 1 })}>
                num2++
            </button>


            {/* 📢注意点2  */}
            { String(flag) }
            
        </>
    );
}

class UseStateComponentOne extends React.Component {
    render() {
        return (
            <>
                <h1>深度学习useState</h1>
                <UsestateCom />
            </>
        );
    }
}

export default UseStateComponentOne;
