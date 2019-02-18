import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

import { AppContainer } from 'react-hot-loader'; // 包裹根节点，想要渲染的内容

const root = document.getElementById('root')
const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        root
    )
}
render(App)

if (module.hot) {
    module.hot.accept('./App.jsx', () => { // 当我们热更新的代码出现的时候，把App重新加载
        const NextApp = require('./App.jsx').default; //因为在App里使用的是export default语法，这里使用的是require,默认不会加载default的，所以需要手动加上
        render(NextApp) // 重新渲染到 document 里面
    })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
