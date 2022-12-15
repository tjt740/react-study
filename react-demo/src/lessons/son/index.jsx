import React, { forwardRef } from 'react';

export const SonCom = forwardRef((props, ref) => {
    console.log(props, ref);
    return (
        <>
            <h2> 我是子组件 </h2>
        </>
    );
});

export default SonCom;
