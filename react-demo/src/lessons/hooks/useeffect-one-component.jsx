import React from 'react';

import { useState, useEffect } from 'react';

function UseEffectCom() {
    const [num, setNum] = useState({
        num1: 0,
        num2: 0,
    });

    
        return (
            <div>
                {/* <h2>数字1：</h2>
                <button onClick={() => { 
                    setNum({
                        ...num,
                        num1: num.num1++
                    })
                }}> 数字1++</button>
                <h2>数字2：</h2>
                <button onClick={() => { 
                    setNum({
                        ...num,
                        num2: num.num++
                    })
                }}> 数字2++</button> */}
            </div>
        );
    }

class UseEffectComponentOne extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    <h1>深度学习useEffect</h1>
                    <UseEffectCom />
                    https://www.cnblogs.com/hymenhan/archive/2021/04/28/14711516.html
                </h1>
            </div>
        );
    }
}
export default UseEffectComponentOne;
