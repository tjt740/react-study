
// 函数声明
function handleClick3() {
  console.log('触发事件3')
}

// 函数表达式
const handleClick4 = function () {
  console.log('触发事件4')
}

// 函数声明接收参数
function handleClick5(val) {
  console.log('接受传参:', val)  // 谭金涛 
}


function App() {
  return (
    <div>

      <h1>事件触发的几种写法</h1>


      {/* 行内匿名函数 */}
      <button onClick={function () { console.log('触发事件1') }}>点击触发事件1</button>
      
      {/* 行内箭头函数 */}
      <button onClick={() => { console.log('触发事件2') }}>点击触发事件2</button>

      {/* 函数声明 */}
      <button onClick={handleClick3}>点击触发事件3</button>

      {/* 函数表达式 */}
      <button onClick={handleClick4}>点击触发事件4</button>

      {/* 函数声明携参 */}
      <button onClick={handleClick5.bind(this, '谭金涛')}>点击触发事件5并传参</button>

    </div>
  );
}

export default App;
