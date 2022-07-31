
// Step1️⃣ 往往useCallback需要配合React.memo 一起使用  2️⃣3️⃣
import React, { useState, useCallback } from 'react';
import { useMemo } from 'react';

const Callback = React.memo(() => {
    const [count, setCount] = useState({
        showNum: 0,
        useCallbackNum: 0,
        useMemoNum:0,
        name: 'tjt',
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

const Child = React.memo((props) => {
    return (
        <>
            {console.log('没有用useCallback会一直触发!!')}
            <button
                onClick={() => {
                    props.handleClick(999);
                }}>
                没用useCallback
            </button>
        </>
    );
});

const UseCallbackChild = React.memo((props) => {
    console.log('用useCallback,如果下一次传入的值与上一次一致，则不会重复触发!!📝')
    return (<>
        <button
            onClick={() => { props.handleClick2(999); }}>
            用useCallback,如果下一次传入的值与上一次一致，则不会重复触发
        </button>
    </>)
});


const UseMemoChild = (props) => { 
 
    const DOM = useMemo(() => {
        console.log('触发一次!!')
        return (
            <button onClick={() => { props.handleClick3(999)}}> useMemo 配合 useCallback 做性能优化 </button>
        )
    }, [])
    return (<>
        { DOM }
    </>)
}

class UseCallback extends React.Component {
    render() {
        return (
            <div>
                <h1>🍳 useCallback 性能优化</h1>
                <Callback></Callback>
            </div>
        );
    }
}

export default UseCallback;
