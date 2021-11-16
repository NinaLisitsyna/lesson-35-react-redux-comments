import React from 'react';
import ReactDOM from 'react-dom';
//связывает react & redux
import { Provider } from 'react-redux'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
//классовый компонент
import App from './components/App';

import store from "./store/store";
//f компонент
import AppF from "./components/AppF";


ReactDOM.render(
  //оборачиваем приложение в provider, кот содержит в себе store={store}
    <Provider store={store}>
        <App />
        <AppF />
    </Provider>
    ,
  document.getElementById('root')
);

