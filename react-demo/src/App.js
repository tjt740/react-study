import './App.css';

import FnComponent from './lessons/fn-component';
import ClassComponent from './lessons/class-component';
import StateComponent from './lessons/state-component';
import EventComponent from './lessons/event-component';
import FormComponent from './lessons/form-compoent';
import UuidComponent from './lessons/uuid-component';
import FatherToSonComponent from './lessons/father-to-son-component';
import SonToFatherComponent from './lessons/son-to-father-component';
import BrotherComponent from './lessons/brother-component';
import ContextComponent from './lessons/context-component';
import ChuanZhiDemoComponent from './练习/嵌套传值练习/chuanzhi-demo-component';
import ChildrenComponent from './lessons/children-component';
import PropsTypeComponent from './lessons/props-component';
import DefaultPropsComponent from './lessons/default-props-component';
import Lifecycle from './lessons/lifecycle-component';
import Lifecycle2 from './lessons/lifecycle/lifecycle2.jsx';
import UseStateComponent from './lessons/hooks/useState-components';
import UseEffectComponent from './lessons/hooks/useEffect-component';
import UseStateComponentOne from './lessons/hooks/usestate-one-component.jsx';
import UseEffectComponentOne from './lessons/hooks/useeffect-one-component';
import UseRef from './lessons/hooks/useRef-component';
import UseContext from './lessons/hooks/usecontext-component';
import UseCallback from './lessons/hooks/usecallback-component';
import UseXxx from './lessons/hooks/usexxx-component';
import Test from './lessons/test-component';
import DayDownComponent from './lessons/demo/day-down-component';
import UseMemoComponent from './lessons/hooks/usememo-component';
import UseXxxx from './lessons/hooks/hook';
import ReduxComponent from './lessons/redux/redux';
import ThreeComponent from './three/index';
import FormilyCom from './formily/index';
import FatherCom from './lessons/father';
import SonCom from './lessons/son';
// react 18 新特性
import UseImmer from './react-18/useImmer';
import UseSyncExternalStore from './react-18/useSyncExternalStore';
// 命令行创建组件 类似实现message.success()效果
import MessageCom from './message-com';
import Usequery from './react-18/usequery';

function App() {
    return (
        <div className="App">
            {/* @函数组件 */}
            {/* <FnComponent></FnComponent> */}
            {/*__________________________________________*/}
            {/* @类组件 */}
            {/* <ClassComponent/> */}
            {/*__________________________________________*/}
            {/* <StateComponent/> */}
            {/*__________________________________________*/}
            {/* @事件 */}
            {/* <EventComponent></EventComponent> */}
            {/*__________________________________________*/}
            {/* @表单 */}
            {/* <FormComponent/> */}
            {/*__________________________________________*/}
            {/* @使用uuid函数 */}
            {/* <UuidComponent/>  */}
            {/*__________________________________________*/}
            {/* @组件传值  */}
            {/* <FatherToSonComponent /> */}
            {/* <SonToFatherComponent/> */}
            {/* <BrotherComponent/> */}
            {/* <ContextComponent /> */}
            {/*__________________________________________*/}
            {/* @传值DEMO练习 */}
            {/* <ChuanZhiDemoComponent/> */}
            {/*__________________________________________*/}
            {/* @组件children属性 */}
            {/* <ChildrenComponent/>  */}
            {/*__________________________________________*/}
            {/* @组件props校验 */}
            {/* <PropsTypeComponent/> */}
            {/*__________________________________________*/}
            {/* @组件propsm默认值 */}
            {/* <DefaultPropsComponent /> */}
            {/*__________________________________________*/}
            {/* @React 生命周期 */}
            {/* {<Lifecycle />} */}
            {/* <Lifecycle2 /> */}
            {/*__________________________________________*/}
            {/* @React Hooks */}
            {/* <UseStateComponent /> */}
            {/* <UseStateComponentOne /> */}
            {/* <UseEffectComponent/> */}
            {/* <UseEffectComponentOne/> */}
            {/* 7.5 */}
            {/* <UseRef/> */}
            {/* <UseContext /> */}
            {/* <UseCallback /> */}
            {/* <UseXxx/> */}
            {/* <Test /> */}
            {/*__________________________________________*/}
            {/* <DayDownComponent /> */}
            {/*__________________________________________*/}
            {/* <UseMemoComponent /> */}
            {/*__________________________________________*/}
            {/* <UseXxxx/> */}
            {/*__________________________________________*/}

            {/* <ReduxComponent /> */}
            {/* <ThreeComponent></ThreeComponent> */}
            {/*__________________________________________*/}

            {/* Formily */}
            {/* <FormilyCom/> */}
            {/*__________________________________________*/}

            {/* 父取子/子传父 */}
            {/* <FatherCom /> */}
            {/*__________________________________________*/}

            {/* react-18 start */}
            {/* <UseSyncExternalStore /> */}
            {/*__________________________________________*/}
            {/* <UseImmer></UseImmer> */}
            <Usequery />
            {/* react-18 end */}
            {/*__________________________________________*/}

            {/* <MessageCom /> */}
        </div>
    );
}

export default App;
