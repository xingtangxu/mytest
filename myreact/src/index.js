//导入es6的语法 冲react 插件里面导入
import React from 'react';
//核心组件
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Demo from './pages/demo/demo';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Demo />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
