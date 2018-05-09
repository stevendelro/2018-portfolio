import { combineReducers } from 'redux';
import Boilerplate from './reducers/Boilerplate';

const rootReducer = combineReducers({
  Boilerplate: Boilerplate
});

export default rootReducer;
