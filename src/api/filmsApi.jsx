import fetch from 'isomorphic-fetch';

class FilmsApi {

  static getAllFilms() {
    const request = new Request('https://ghibliapi.herokuapp.com/films', {
      method: 'GET',
      mode: 'cors',
    });

    const getResponse = (response) => {
      return response.json();
    };

    const getError = (error) => {
      return error;
    };

    return fetch(request)
      .then(getResponse)
      .catch(getError);
  }

}

export default FilmsApi;
