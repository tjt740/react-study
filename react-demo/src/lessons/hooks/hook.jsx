import React from 'react';
// http://geek.itheima.net/v1_0/channels

import { useState, useEffect } from 'react';

function GetSomething() {
    // Step2️⃣ 定义useState值
    const [data, setData] = useState('谁?');
    // Step3️⃣ 定义回调函数
    const getData = () => {
        return fetch(`http://geek.itheima.net/v1_0/channels`, { method: 'GET' })
            .then((response) => response.json())
            .then((res) => {
                console.log('数据:', res);
                setData(res.message);
            });
    };

    // Step4️⃣ return参数
    return [data, getData];
}

const Fn = () => {
    const [data, getData] = GetSomething();
    
    useEffect(() => {
        getData();
    }, []);

    console.log('data:', data); // '谁?' ---> 'ok';
    return <>{data}</>;
};

class UseXxxx extends React.Component {
    render() {
        return (
            <div>
                <Fn />
            </div>
        );
    }
}

export default UseXxxx;
