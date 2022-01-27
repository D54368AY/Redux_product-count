import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';//import store
import {Provider} from 'react-redux'
const initialState={count:localStorage.getItem('mycart')!=undefined ? JSON.parse(localStorage.getItem('mycart')):[]}
//create reducer
function reducer(state=initialState,actions){
  console.log(state);
    switch(actions.type){
      case 'new' : 
             return {count:[actions.payload]}
      case 'defined' :
             return {count:[...state.count,actions.payload]}
      case 'reset' :
             return {count:[]}
      default : return state;
    }
}
const store=createStore(reducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
