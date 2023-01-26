import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import axios from 'axios';

//import 'bootstrap/dist/css/bootstrap.min.css';
axios.defaults.baseURL = "https://placeres-sin-tacc.onrender.com"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

