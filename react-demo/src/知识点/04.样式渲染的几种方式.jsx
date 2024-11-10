
// 第一种 import 引入样式的方法
import './App.css';

// 第二种 
const style2 = {
  fontColor: {
    color: 'red',
  },
}

const style3 = {
  'font-weight': 600,
  'color':'tan'
}


function App() {
  return (
    <div>
      <h1>样式的几种写法</h1>
      <p className='p1' id='id-p1'>style1</p>
      <p style={style2.fontColor}>style2</p>
      <p style={style3}>style3</p>
      <p style={{
        color: 'pink',
        'font-size':'18px'
      }}>style4</p>
    </div>
  );
}

export default App;
