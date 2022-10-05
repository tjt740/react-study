// redux :全局数据状态管理

// Step1️⃣ 引入 createStore
import { legacy_createStore as createStore } from 'redux';

// Step2️⃣ 创建初始值
const initialState = {
    num: 0,
    name: '谭金涛',
};

// Step3️⃣ 定义一个纯函数 接受初始值和action 返回更新后的值
const reducer = (state = initialState, { type, payload }) => {
    // const { type, payload } = action;
    // console.log(payload);
    switch (type) {
        case 'addNum':
            return {
                ...state,
                num: (state.num += payload),
            };
        case 'getWife':
            return {
                ...state,
                wife: (state.wife = payload),
            };
        default:
            return state;
    }
};

// Step4️⃣  根据reducer创建store ,创建仓库
const store = createStore(reducer);

// Step5️⃣  发布订阅模式 可以在派发action之前，监听store的变化
const listener = () => {
    const getCurrent = store.getState(); //固定写法 store.getState() 监听store的变化：
    console.log('改变的数据:', getCurrent);
};

// Step6️⃣ 监听订阅模式
store.subscribe(listener);

export default store;

// Step7️⃣
// Step8️⃣
// Step9️⃣
// Step🔟
