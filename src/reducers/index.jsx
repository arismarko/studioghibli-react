
import { combineReducers } from 'redux';
import films from './films.jsx';

const rootReducer = combineReducers({
  // short hand property names
  films,
});

export default rootReducer;
