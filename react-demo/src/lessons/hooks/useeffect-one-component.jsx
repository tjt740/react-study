import React from 'react';

import { useState, useEffect } from 'react';

function UseEffectCom() {
    const [num, setNum] = useState({
        num1: 0,
        num2: 0,
    });

    useEffect(() => {
        console.log('触发了useEffect钩子!')
    }, [num.num1])


    return (
        <div>
            <h2>数字1：{num.num1}</h2>
            <button onClick={() => {
                setNum({
                    ...num,
                    num1: num.num1 + 1
                })
            }}> 数字1++</button>
            <h2>数字2：{num.num2}</h2>
            <button onClick={() => {
                setNum({
                    ...num,
                    num2: ++num.num2
                })
            }}> 数字2++</button>
        </div>
    );
}

function App() {  
    const [flag, setFlag] = useState(true)  
    return (    
        <>      
          <button onClick={() => setFlag(false)}>点击暂停定时器</button>      
         {flag ? <Foo/> : null}    
        </>  
    )
}

function Foo() {  
    const [num, setNum] = useState(0);
    useEffect(() => {    
       let timer = setInterval(() => {     
           console.log('副作用函数执行了')    
           setNum(num+1);
        }, 1000)  
        return () => { 
            console.log('===>','触发清除定时器')
            clearInterval(timer)
        }
    },[num]) 
    return <div>{ num }</div>  
}

class UseEffectComponentOne extends React.Component {
    render() {
        return (
            <div>

                <h1>深度学习useEffect</h1>
                {/* <UseEffectCom /> */}
                 <App/>
                {/* https://www.cnblogs.com/hymenhan/archive/2021/04/28/14711516.html */}

            </div>
        );
    }
}
export default UseEffectComponentOne;
