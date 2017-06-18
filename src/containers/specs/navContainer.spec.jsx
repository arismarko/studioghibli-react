import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { initialState } from '../../reducers/initialState';
import { NavContainer } from '../navContainer.jsx';

import * as actions from '../../actions/films';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('containers/navContainer', () => {
  it('renders with default props', () => {  
    const store = mockStore({ initialState });
    store.dispatch(actions.loadAllFilms()).then(() => {
      const wrapper = shallow(
        <NavContainer />
      );

      expect(shallowToJson(wrapper)).toMatchSnapshot();
    }); 
  });
});