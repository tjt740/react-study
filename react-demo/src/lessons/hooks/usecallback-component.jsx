// Step1️⃣ 往往useCallback需要配合React.memo / useMemo 一起使用 
import React, { useState, useCallback } from 'react';
import { useMemo } from 'react';

const Callback = React.memo(() => {
  
  // Step3️⃣ 定义组件共用useState参数
    const [count, setCount] = useState({
        showNum: 0,
        useCallbackNum: 0,
        useMemoNum:0,
    });

 
    const handleClick = (newValue) => {
        setCount({
            ...count,
            showNum: newValue,
        });
    };

    const handleClick2 = useCallback((newValue) => {
        setCount({
            ...count,
            useCallbackNum:newValue
        })
    }, []);
 
    const handleClick3 = useCallback((newValue) => { 
        setCount({
            ...count,
            useMemoNum:newValue
        })
    },[])

    return (
        <>
            <h2>showNum: {count.showNum}</h2>
            <Child handleClick={handleClick} />

            <h2>useCallbackNum: {count.useCallbackNum}</h2>
            <UseCallbackChild handleClick2={handleClick2} />

            <h2>useMemoNum: {count.useMemoNum}</h2>
            <UseMemoChild handleClick3={handleClick3} />
        </>
    );
});

// 🔊 没用useCallback, 所以每次涉及到useState 参数变化时,都会触发更新渲染。
const Child = React.memo((props) => {
    return (
        <>
            {console.log('没有用useCallback会一直触发更新渲染!!')}
            <button
                onClick={() => {
                    props.handleClick(Math.random());
                }}>
                没用useCallback
            </button>
        </>
    );
});

// 🔊 使用了React.memo + useCallback, 所以只会开局触发一次。 ❗❗多次点击也只触发一次更新渲染。
const UseCallbackChild = React.memo((props) => {
    console.log('用useCallback,如果下一次传入的值与上一次一致，则不会重复触发!!📝')
    return (
      <>
        <button
            onClick={() => { props.handleClick2(Math.random()); }}>
            用useCallback,如果下一次传入的值与上一次一致，则不会重复触发
        </button>
      </>
    )
});

// 🔊 使用了useMemo + useCallback, 也只会触发一次，❗❗多次点击也只触发一次更新渲染。
const UseMemoChild = (props) => { 
 
    const DOM = useMemo(() => {
        console.log('开局渲染触发一次!!')
        return (
            <button onClick={() => { props.handleClick3(Math.random())}}> useMemo 配合 useCallback 做性能优化 </button>
        )
    }, [])
    
    return (
      <>
        { DOM }
      </>
    )
}






class UseCallback extends React.Component {
    render() {
        return (
            <div>
                <h1>🍳 useCallback 性能优化</h1>
            
                {/* Step2️⃣ 挂载组件 */}
                <Callback></Callback>
            </div>
        );
    }
}

export default UseCallback;

