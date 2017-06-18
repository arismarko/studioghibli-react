import * as types from './actionTypes.jsx';
import FilmsApi from '../api/filmsApi.jsx';

export function loadFilmsSuccess(films) {
  return { type: types.LOAD_FILMS_SUCCESS, films };
}

export function fetchFilmsRequest() {
  return {
    type: types.FETCH_FILMS_REQUEST,
  };
}

export function loadAllFilms() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return dispatch => {
    dispatch(fetchFilmsRequest());
    return FilmsApi.getAllFilms().then(films => {
      return dispatch(loadFilmsSuccess(films));
    });
  };
}
