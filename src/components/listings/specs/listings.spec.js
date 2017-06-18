import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import { Listings } from '../listings';

describe("component/Listings", () => {
  // Globals
  let compGlobal;

  // Props
  const props = {
    items: [
      {
        title: 'My neighbour totoro',
        content: 'My favorite movie',
        url: 'nourl',
      },
    ],
  };

  // Context

  // Others


  it('should pass correctly at least one property', () => {
    compGlobal = mount(
      <Listings {...props} />
    );

    expect(compGlobal.props().items[0].title).to.be.equal('My neighbour totoro');
  });


  it('prints an h4 with the correct value', () => {
    compGlobal = shallow(
      <Listings {...props} />
    );

    const h4 = compGlobal.find('h4').text();
 
    expect(h4).to.be.equal('My neighbour totoro');
  });

});
