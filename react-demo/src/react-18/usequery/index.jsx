import React, { useEffect } from 'react';
import UseApi from './hook';

export default function Usequery() {
    const queryName = UseApi(
        'https://mock.apifox.com/m1/3305209-0-default/api/getsomething'
    );

    console.log(queryName.data, queryName.loading, queryName.error);

    const handleFetchData = () => {
        console.log(queryName.data, queryName.loading, queryName.error);
    };

    useEffect(() => {
        queryName.fetchData();
    }, []);

    return (
        <>
            <button onClick={handleFetchData}>Fetch Data 1</button>
        </>
    );
}
