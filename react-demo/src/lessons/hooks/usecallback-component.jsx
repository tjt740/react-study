import React, { useState, useCallback } from "react";


const Callback = React.memo(() => { 
    const [count, setCount] = useState(0);
    const handleClick = useCallback((value) => { 
        setCount(value);
    },[count])
    return (
        <>
            <h4>
                count: {count}
            </h4>
            <Child1 handleClick={ handleClick } />
        </>
    ) 
})

const Child1 = React.memo(props => { 
    return (
        <>
            {console.log('props:', props)}
            <button onClick={() => { props.handleClick(999)}}> 改变num </button>
        </>
    )
})

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