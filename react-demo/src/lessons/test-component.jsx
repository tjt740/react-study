import React, { useState, useEffect } from 'react';
// import { List, Empty } from 'antd-mobile';
// import { QuestionCircleOutline } from 'antd-mobile-icons';

import DayDownComponent from './demo/day-down-component';
import dayjs from 'dayjs';
const EmptyCom = () => {
    return (
        <>
            {/* <Empty
                style={{ padding: '64px 0' }}
                image={
                    <QuestionCircleOutline
                        style={{
                            color: 'var(--adm-color-light)',
                            fontSize: 48,
                        }}
                    />
                }
                description="暂无数据"
            /> */}
        </>
    );
};

const ListCom = () => {
    const [arr, setArr] = useState([1, 2, 3, 4]);
    useEffect(() => {
        setTimeout(() => {
            setArr([]);
        }, 3000);
    }, []);

    return (
        <>
            {/* <List header="基础用法">
                {arr.map((v, i) => {
                    return <List.Item key={i}>{v}</List.Item>;
                })}
            </List> */}
            {!arr.length && <EmptyCom />}
        </>
    );
};

class Test extends React.Component {
    state = {
        expirationDate: null,
    };

    componentDidMount() {
        const nowDate = dayjs().toDate().getTime();
        this.setState(
            {
                expirationDate: (1659087056855 + 86400001 - nowDate) / 1000,
            },
            () => {
                console.log(this.state);
            }
        );
    }

    render() {
        return (
            <div>
                <h1> 测试</h1>
                {/* <ListCom /> */}
                <DayDownComponent
                    expirationDate={this.state.expirationDate}
                ></DayDownComponent>
            </div>
        );
    }
}
export default Test;
