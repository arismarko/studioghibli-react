import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import { NavBar } from '../navbar';

describe("component/Navbar", () => {
  // Globals
  let compGlobal;

  // Props
  const props = {
    films: [
      {
        title: 'My neighbour totoro',
        content: 'My favorite movie',
        url: 'nourl',
      },
    ],
    handleChange: null,
  };

  // Context

  // Others


  it('should render self and subcomponents', () => {
    compGlobal = mount(
      <NavBar {...props} />
    );

    expect(compGlobal.find('nav').hasClass('navbar')).to.be.equal(true);
    const Searchbar = compGlobal.find('Searchbar').props();
    expect(Searchbar.placeholder).to.be.equal('Search for a movie title');
  });
});
