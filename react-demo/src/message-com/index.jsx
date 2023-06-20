import React, { useEffect } from 'react';
// 测试localForage
import localforage from 'localforage';

import Message from './message';

export default function MessageCom() {
    useEffect(() => {
        window.Message = Message;

        // 回调API形式设置数据，获取数据。
        localforage.setItem('name', '谭金涛', function (err) {
            localforage.getItem('name', function (err, value) {
                console.log(value); // '谭金涛'
            });
        });

        // ES6 Promises 形式
        localforage
            .setItem('info', {
                age: '24',
                work: 'IT',
            })
            .then(function () {
                return localforage.getItem('info');
            })
            .then(function (value) {
                console.log('value：', value); // {age: '24', work: 'IT'}
            })
            .catch(function (err) {
                console.log(err);
            });
    }, []);

    return (
        <>
            <br />

            <button
                onClick={() => {
                    Message.onShow();
                }}
            >
                出现
            </button>
            <br />
            <button>消失</button>
        </>
    );
}
