// React: 框架的核心包
import React from 'react';

// ReactDOM: 框架的DOM渲染相关的包
import ReactDOM from 'react-dom/client';

// 引入全局样式
import './index.css';

// 引入根组件
import App from './App';

// 渲染根组件到一个id名叫root的DOM节点上 （./public/index.html）
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />  
);
