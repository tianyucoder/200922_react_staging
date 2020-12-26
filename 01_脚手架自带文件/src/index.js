//引入react核心库，当年我们通过script标签引入
import React from 'react';
//引入react-dom，当年我们通过script标签引入
import ReactDOM from 'react-dom';
//引入样式
import './index.css';
//引入App根组件
import App from './App';
//引入reportWebVitals，用于分析页面性能
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
