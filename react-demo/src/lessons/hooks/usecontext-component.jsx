import React, { useState, useEffect, useContext } from 'react';
// Step1 通过React.createContext创建一个TextContext对象
const TextContext = React.createContext();

const FnFarther = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <h2>👌🏻 函数父组件 </h2>
            <button onClick={() => setCount(count + 1)}>数字++</button>
            {/* Step2 TextContext.Provider 包裹子组件 value={xxx} 固定写法 */}
            <TextContext.Provider value={count}>
                <FnChild1></FnChild1>
                <hr />
                {/* <FnChild2></FnChild2> */}
            </TextContext.Provider>
        </>
    );
};

const FnChild1 = () => {
    // Step3 通过useContent接收数据
    const value = useContext(TextContext);
    return (
        <>
            <h3>🦢 Child1</h3>
            数字🔢: {value}
            {console.log('🦢 Child1')}
            <FnGrandSon />
            <FnChild2></FnChild2>
        </>
    );
};

// Step4 const xx = React.memo(()=>{ xx }) ,  useMemo(回调函数，[依赖值]) 可以解决因改变其他组件而引起的没必要的渲染更新。
const FnChild2 = React.memo(() => {
    return (
        <>
            <h3>🍔 Child2</h3>
            {console.log('🍔 Child2')}
        </>
    );
});

const FnGrandSon = React.memo(() => {
    const msg = useContext(TextContext);
    return (
        <>
            <h4>🍦 孙子级函数</h4>
            {msg}
            {console.log('🍦 孙子级函数')}
        </>
    );
});
class UseContext extends React.Component {
    render() {
        return (
            <div>
                <h1> useContext : 跨组件共享数据(可跨孙子级)</h1>
                <FnFarther />
            </div>
        );
    }
}

export default UseContext;
