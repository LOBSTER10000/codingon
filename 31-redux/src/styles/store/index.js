import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
// import isVisibleReducer from './isVisibleReducer';
import isData from './isData';
import moneyReducer from './moneyReducer';
// combineReducer : 여러 개의 리듀서를 하나로 합침
const rootReducer = combineReducers({
  counter: counterReducer,
  isData: isData,
  money: moneyReducer,
});

export default rootReducer;
