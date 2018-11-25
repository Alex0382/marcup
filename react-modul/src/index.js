import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './routing/router';
import {Provider} from "react-redux";
import {store} from "./store/store";
import registerServiceWorker from './registerServiceWorker';

const AddStore = () => (
    <Provider store={store}>
        <Router />
    </Provider>
);

ReactDOM.render(<AddStore />, document.getElementById('root'));
registerServiceWorker();
