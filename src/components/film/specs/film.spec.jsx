import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import { Film } from '../film';

describe("component/Film", () => {
  // Globals
  let compGlobal;

  // Props
  const props = {
    selected: {
      title: 'My neighbour totoro',
      content: 'My favorite movie',
      url: 'nourl',
    },
  };

  // Context

  // Others


  it('should pass correctly at least one property', () => {
    compGlobal = mount(
      <Film {...props} />
    );

    expect(compGlobal.props().selected.title).to.be.equal('My neighbour totoro');
  });


  it('prints an h1 with the correct value', () => {
    compGlobal = shallow(
      <Film {...props} />
    );

    const h1 = compGlobal.find('h1').text();
 
    expect(h1).to.be.equal('My neighbour totoro');
  });

});
