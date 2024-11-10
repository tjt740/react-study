import React, { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';

export default function UseImmer() {
    const [person, setPerson] = useState({
        name: 'tjt',
        information: {
            title: '测试内容',
            city: 'hangzhou',
            image: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/frog.1dd7825.png',
        },
    });

    const [context, setContext] = useImmer({
        data: {
            success: true,
            list: [{ recordId: 1, name: 'qsn' }],
        },
    });

    useEffect(() => {
        // useState 使用
        setPerson({
            ...person,
            information: {
                ...person.information,
                title: '新内容',
            },
            work: 'IT',
        });

        // pnpm i use-immer

        // useImmer 使用
        setContext((draft) => {
            console.log(draft);
            draft.data.status = 200;
        });
    }, []);

    return (
        <>
            <h1>{person.information.title}</h1>
            <h2>{person.work}</h2>

            <h3>{context.data.status}</h3>
        </>
    );
}
