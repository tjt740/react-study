import { useState } from 'react';
import axios from 'axios';

const UseApi = (url, type = 'GET', params) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // 获取接口数据
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios(url, {
                method: type,
                params,
            });
            setData(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    return { data, loading, error, fetchData };
};

export default UseApi;
