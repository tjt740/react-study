import React, { useEffect, useMemo, useCallback, useState } from 'react';
// import * as tools from './customize';
// console.log(tools)
import '../../index.css';
import { UseMount } from './customize';

const FnComponent = React.memo(() => {
    const url =
        'https://search.heweather.com/find?key=bc08513d63c749aab3761f77d74fe820';
    let location = '杭州';

    const HaiNan = UseMount(url, '海南')?.HeWeather6[0].basic.map((v) => {
        return <h4 key={v.cid}> {v.location}</h4>;
    });

    return (
        <>
            <div>
                {UseMount(url, location)?.HeWeather6[0].basic.map((value) => {
                    return <h3 key={value.cid}>{value.location}</h3>;
                })}
                <hr />
                {UseMount(url, '扬州')?.HeWeather6[0].basic.map((value) => {
                    return <h3 key={value.cid}>{value.location}</h3>;
                })}
                <hr />
                {HaiNan}
            </div>
        </>
    );
});

class UseXxx extends React.Component {
    render() {
        return (
            <div>
                <h1>👨‍👦 自定义hook</h1>
                <FnComponent />
            </div>
        );
    }
}

export default UseXxx;
