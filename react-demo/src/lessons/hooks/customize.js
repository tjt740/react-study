import { useEffect, useState } from 'react';

export const UseMount = (url, params) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`${url}&location=${params}`, { method: 'GET' })
        .then((response) => response.json())
        .then((res) => {
            console.log('数据:', res);
            setData(res);
        });
    }, [url,params]);
    return data;
};
