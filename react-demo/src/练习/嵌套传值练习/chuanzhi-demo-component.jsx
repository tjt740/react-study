import React from 'react';

function ListItem(props) {
    const { list, changeList } = props.list;

    return (
        <>
            <ul>
                {
                    list.map((v, i) => (
                        <li key={v.id}>

                            <p>菜名: {v.name}</p>
                            <p>价格: {v.price}</p>
                            <p>备注: {v.info}</p>
                            <button onClick={() => changeList(i)}>删除</button>
                        </li>
                    )
                    )
                }
            </ul>
        </>
    )
}

class ChuanZhiDemoComponent extends React.Component {


    state = {
        list: [
            { id: 1, name: '超级好吃的棒棒糖', price: 18.8, info: '开业大酬宾，全场8折' },
            { id: 2, name: '超级好吃的大鸡腿', price: 34.2, info: '开业大酬宾，全场8折' },
            { id: 3, name: '超级无敌的冰激凌', price: 14.2, info: '开业大酬宾，全场8折' }
        ],

        changeList: (Sonidx) => {
            console.log('传入的下标:', Sonidx);

            this.setState({
                list: this.state.list.filter((v, i) => i !== Sonidx)

            })
        }
    }


    render() {
        return (
            <div>
                <ListItem list={this.state} />
            </div>
        );
    }


}


export default ChuanZhiDemoComponent;