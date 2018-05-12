import { combineReducers } from 'redux'
import predictionReducer from './predictionReducer';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  predictionReducer,
  routing: routerReducer
});

export default rootReducer;
