

import cnames from 'classnames';
const newName = 'tjt740';

const isShow = true;
const json = {
  className1:'new-name' 
}
function App() {
  return (
    <div>

      <div className="class1">类名设置（一）</div>
      <div className="class1 class2"> 类名设置（二）</div>

       {/* 动态类名设置 */}
      <div className={`class1 ${json.className1} ${isShow ? 'show' : 'hidden'}`}> 动态类名设置（一）</div>

      <div className={isShow ? 'show' : 'hidden'}> 动态类名设置（二） </div>

      <div className={['class1', 'class2', isShow ? 'show' : 'hidden'].join(' ')}>多个动态类名设置（三）</div>
      
      {/* 推荐 */}
      <div className={cnames(newName, json.className1,{
        'show': isShow,
        'class1 class2':true
      }) }>多个动态类名设置（四）</div>

    </div>
  );
}

export default App;
