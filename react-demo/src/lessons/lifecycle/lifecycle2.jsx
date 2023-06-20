import React, { PureComponent } from 'react';

// class Children extends PureComponent {
class Children extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(nextProps, nextState, nextContext);
        return true;
    }

    render() {
        const { fatherNum } = this.props;

        return (
            <>
                <h5>参数：{fatherNum}</h5>
            </>
        );
    }
}

export default class Lifecycle2 extends React.Component {
    state = {
        num: 0,
        a: 1,
    };

    render() {
        return (
            <>
                <h2>父组件</h2>
                <button
                    onClick={() => this.setState({ num: ++this.state.num })}
                >
                    ++1
                </button>
                <button onClick={() => this.setState({ a: --this.state.a })}>
                    --1
                </button>

                <h3>子组件</h3>
                <Children fatherNum={this.state.num} />
            </>
        );
    }
}
