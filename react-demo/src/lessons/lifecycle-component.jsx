import React from 'react';

import ComB from './comB-component';

class ComA extends React.Component {
    constructor(props) {
        super(props);
        console.log('ComA--constructor');
    }
    componentWillUnmount() {
        console.log('ComA--componentWillUnmount');
    }
    componentDidMount() {
        console.log('ComA--componentDidMount');
    }

    render() {
        console.log('ComA--render');
        return (
            <div>
                <h2>子组件A</h2>
            </div>
        );
    }
}

class LifecycleComponent extends React.Component {
    timer = null;
    constructor(props) {
        super(props);
        console.log('father--constructor');
    }

    componentDidUpdate() {
        console.log('更新组件时触发--componentDidUpdate');
    }

    time() {
        console.log(this.timer);
        this.timer = setInterval(
            () => this.setState({ num: this.state.num + 1 }),
            1000
        );
    }

    clearInterval = () => {
        clearInterval(this.timer);
    };

    state = {
        flag: true,
        num: 0,
    };

    componentDidMount() {
        console.log('father--componentDidMount');
    }

    componentWillUnmount() {
        console.log('组件销毁时触发--componentWillUnmount');
    }

    render() {
        console.log('father--render');
        return (
            <div>
                <h1>生命周期</h1>

                {this.state.num}
                <button
                    onClick={() => {
                        this.setState({ num: ++this.state.num });
                    }}
                >
                    +1
                </button>
                {/* <button onClick={() => this.time()}>++</button> */}

                {this.state.flag ? (
                    <ComB clearInterval={this.clearInterval} />
                ) : null}
                <button
                    onClick={() => {
                        this.setState({ flag: false });
                    }}
                >
                    删除
                </button>
                {/* <ComA></ComA>
                <ComB /> */}
            </div>
        );
    }
}

export default LifecycleComponent;
