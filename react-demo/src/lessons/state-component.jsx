
import react from 'react'

class StateComponent extends react.Component {

    // 1.初始化状态
    state = {
        count: 1,
    }

    
    handleClick = () => {
        // 2.获取状态 this.state
        console.log('获取状态state',this.state)

        // 3.修改状态 
        this.setState({ count: ++this.state.count })
        console.log(this.state.count); // 2 3 4 5 6...
    };
    fn() { 
        console.log(this)
    }
    // 渲染视图
    render() {
        return (
            <div id='changeState'>
                <input type='text' readOnly value={this.state.count} />

                <button onClick={this.handleClick}>数字＋＋</button>

                
                <button onClick={this.fn.bind(this)}>this</button>
            </div>
        )
    }

}
export default StateComponent