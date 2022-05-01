
import './App.css';

// 第一种加载图片方式 
import onePic from './images/1.jpg';

function App () {
  return (
    <div>
      {/* 第一种加载图片方式 √ */}
      <img src={ onePic } alt=''/>

      {/* 第二种加载图片方式 √ */}
      <img src={require('./images/1.jpg')} alt='' />
      
      {/* 第三种加载图片方式 × */}
      <img src="./images/1.jpg" alt="" />
    </div>
  )
}

export default App
