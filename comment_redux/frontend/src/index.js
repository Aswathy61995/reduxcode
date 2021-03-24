import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import App from '../js/components/presentation/App';
import reportWebVitals from './reportWebVitals';
import {render} from "react-dom";
//import store from "./js/store/index";
import AppDemo from './AppDemo';
import { createStore } from 'redux'
import allReducers from './reducers';
import {Provider} from "react-redux";
import GetBooksByTitle from './js/container/GetBooksByTitle';
import ListAllBooks from './ListAllBooks';

const store=createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDOM.render(
  <Provider store={store}>
     <AppDemo /> 
  
    </Provider>,
    document.getElementById('root')
  
  //document.getElementById("create-comment-form")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
