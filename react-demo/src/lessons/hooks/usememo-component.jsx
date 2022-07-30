import React, { useMemo } from 'react';





const ComA = () => { 
    return (
        <>
            1
        </>
    )
}



class UseMemoComponent extends React.Component { 

    state = {
        num: 1
    }

    render() {
        return (
            <div>
                <h1> 性能优化: useMemo </h1>
                <button onClick={() => { this.setState({ num: 1 }) }}>++</button>
                <ComA />
                {/* <ComB /> */}
                {/* <ComC /> */}
            </div>
        );
    }

}


export default UseMemoComponent;