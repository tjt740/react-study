import './App.css';

import  FnComponent  from './lessons/fn-component';
import ClassComponent from './lessons/class-component';
import StateComponent from './lessons/state-component';
import EventComponent from './lessons/event-component';
import FormComponent from './lessons/form-compoent';
import UuidComponent from './lessons/uuid-component';
import FatherToSonComponent from './lessons/father-to-son-component';
import SonToFatherComponent from './lessons/son-to-father-component';



function App() {



  return (
    <div className="App">
      {/* 函数组件 */}
      {/* <FnComponent></FnComponent> */}


      {/* 类组件 */}
      {/* <ClassComponent/> */}

      {/* 组件状态 */}
      {/* <StateComponent/> */}


      {/* 事件 */}
      {/* <EventComponent></EventComponent> */}


      {/* 表单 */}
      {/* <FormComponent/> */}

      {/* 使用uuid函数 */}
      {/* <UuidComponent/> */}


      {/* 组件传值  */}
      {/* <FatherToSonComponent /> */}
 
      <SonToFatherComponent/>
      

    </div>
  )
}

export default App

