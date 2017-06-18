import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import nock from 'nock';

import * as actions from '../films';
import * as types from '../actionTypes.jsx';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions/films', () => {

  it('Action is executed correctly and the correct payload is returned', () => {
    nock('https://ghibliapi.herokuapp.com')
    .get('/films')
    .reply(200, { body: [{ title: 'My neighbour totoro' }] });

    const store = mockStore({ films: [] });

    return store.dispatch(actions.loadAllFilms()).then(() => {
      // return of async actions
      expect(store.getActions()[1].films.body[0].title).to.be.equal('My neighbour totoro');
    });
  });
});
