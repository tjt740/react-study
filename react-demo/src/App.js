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
import UseStateComponent from './lessons/hooks/useState-components';
import UseEffectComponent from './lessons/hooks/useEffect-component';
import UseStateComponentOne from './lessons/hooks/usestate-one-component.jsx';
import UseEffectComponentOne from './lessons/hooks/useeffect-one-component';

function App() {

  return (
    <div className="App">
      { /* @函数组件 */ }
      { /* <FnComponent></FnComponent> */ }
      { /*__________________________________________*/ }

      { /* @类组件 */ }
      { /* <ClassComponent/> */ }
      { /*__________________________________________*/ }

      { /* @组件状态 */ }
      { /* <StateComponent/> */ }
      { /*__________________________________________*/ }

      { /* @事件 */ }
      { /* <EventComponent></EventComponent> */ }
      { /*__________________________________________*/ }

      { /* @表单 */ }
      { /* <FormComponent/> */ }
      { /*__________________________________________*/ }

      { /* @使用uuid函数 */ }
      { /* <UuidComponent/> */ }
      { /*__________________________________________*/ }

      { /* @组件传值  */ }
      { /* <FatherToSonComponent /> */ }
      { /* <SonToFatherComponent/> */ }
      { /* <BrotherComponent/> */ }
      { /* <ContextComponent /> */ }
      { /*__________________________________________*/ }

      { /* @传值DEMO练习 */ }
      { /* <ChuanZhiDemoComponent/> */ }
      { /*__________________________________________*/ }

      { /* @组件children属性 */ }
      { /* <ChildrenComponent/> */ }
      { /*__________________________________________*/ }


      { /* @组件props校验 */ }
      { /* <PropsTypeComponent/> */ }
      { /*__________________________________________*/ }

      { /* @组件propsm默认值 */ }
      { /* <DefaultPropsComponent /> */ }
      { /*__________________________________________*/ }


      { /* @React 生命周期 */ }
      { /* <Lifecycle/> */ }
      { /*__________________________________________*/ }


      { /* @React Hooks */ }
      { /* <UseStateComponent /> */ }
      {/* <UseStateComponentOne /> */}
      { /* <UseEffectComponent/> */}
      <UseEffectComponentOne/>
      { /*__________________________________________*/ }
    </div>
  )
}

export default App

