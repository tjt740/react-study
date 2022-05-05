import './App.css';

import  FnComponent  from './fn-component';
import ClassComponent from './class-component';


function App() {
  return (
    <div className="App">
      {/* 函数组件 */}
      <FnComponent></FnComponent>

  
      {/* 类组件 */}
      <ClassComponent/>
    </div>
  )
}

export default App
