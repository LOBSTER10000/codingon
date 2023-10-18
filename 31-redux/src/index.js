import React from 'react';
import ReactDOM from 'react-dom/client';
import App2 from './App2';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

const root = ReactDOM.createRoot(document.getElementById('root'));
// state 초기값 정의
const initialState = {
  number: 50,
};

// reducer : 액션의 타입에 따라 변화하는 함수
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLUS':
      return { number: state.number + 1 };
    case 'MINUS':
      return { number: state.number - 1 };
    default:
      return state;
  }
};

// store 정의 : 전역 상태를 관리하는 공간 (하나의 프로젝트에 하나만!)
const store = configureStore({ reducer: reducer }, composeWithDevTools());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App2 />
    </Provider>
  </React.StrictMode>
);
