import React, {
    useDeferredValue,
    useEffect,
    useSyncExternalStore,
    useId,
} from 'react';

import { useQueryData, useInnerWidth } from './hooks';

import './index.css';

export default function UseSyncExternalStore() {
    const [data, getData] = useQueryData();
    const innerWidth = useInnerWidth();

    // const id = useId();
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h1>使用React-18 useSyncExternalStore </h1>
            <h2>{data}</h2>

            <h2>{innerWidth}</h2>
            {/* 

            <label htmlFor={id}>选择框</label>
            <input type="checkbox" name="sex" id={id} />
            <div id={useId()}>
                A-1
                <div id={useId()}>B-1</div>
                <div id={useId()}>
                    B-2
                    <div id={useId()}>C-1</div>
                </div>
            </div> */}
        </>
    );
}
