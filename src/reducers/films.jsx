import * as types from '../actions/actionTypes.jsx';
import initialState from './initialState.jsx';

export default function pagesReducer(state = initialState.films, action) {
  switch (action.type) {
    case types.LOAD_FILMS_SUCCESS:
      return action.films;
    default:
      return state;
  }
}
