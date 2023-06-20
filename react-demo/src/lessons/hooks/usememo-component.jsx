// Step1️⃣ 引入useMemo函数
import React, { useMemo, useEffect } from 'react';

const ComA = (props) => {
    const { fatherNum } = props;

    //Step4️⃣ 监听父级参数变化,父级参数变化时就触发，并return 内容

    const fnMemo1 = useMemo(() => {
        console.log('🍗 触发!', fatherNum);
        if (fatherNum >= 3) return `fatherNum >= 3`;
        return `监听fatherNum 变化 `;
    }, [fatherNum]);

    // 🔊 只会执行一次,避免重复渲染
    const fnMemo2 = useMemo(() => {
        return `只会执行一次`;
    }, []);

    // 🔊 🔴 useMemo和useEffect 区别
    useEffect(() => {
        console.log(`useEffect和useMemo最大的区别在于:
            1. useEffect没有返回值,useMemo有返回值。
            2.useEffect没有返回值(在不考虑解绑的情况下), 并且是在页面渲染之后才执行的, 而useMemo有返回值, 并且是在页面渲染的时候进行的`);
    }, []);

    return (
        <>
            {/* Step3️⃣ 挂载使用*/}
            <h2>{fnMemo1}</h2>
            <h3>{fnMemo2}</h3>
        </>
    );
};

const ComB = React.memo(
    ({ fatherNum }) => {
        console.log(
            '🍟: ComB 因为有相关值更新,所以不管加不加React.memo 都会触发!'
        );
        return (
            <>
                <h2>
                    ComB:<span>{fatherNum}</span>
                </h2>
            </>
        );
    },
    (prevProps, nextProps) => {
        if (nextProps.fatherNum >= 3) {
            console.log('阻止渲染');
            return true; // 阻止渲染
        }
        console.log('上一次值:', prevProps);
        console.log('当前新值:', nextProps);
    }
);

const ComC = React.memo(() => {
    console.log(
        '🥐: ComC 因为用了React.memo ,且没有相关值更新,所以只加载一次!'
    );
    return (
        <>
            <p>🌭 ComC</p>
        </>
    );
});

class UseMemoComponent extends React.Component {
    state = {
        num: 1,
    };

    render() {
        return (
            <div>
                <h1> 性能优化: useMemo </h1>
                <button
                    onClick={() => {
                        this.setState({ num: this.state.num + 1 });
                    }}
                >
                    ++
                </button>

                {/* Step2️⃣ 挂载父级参数 */}
                {/* <ComA fatherNum={this.state.num} /> */}

                <ComB fatherNum={this.state.num} />
                <ComC />
            </div>
        );
    }
}

export default UseMemoComponent;
