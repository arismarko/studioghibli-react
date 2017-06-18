import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { Searchbar } from '../searchbar';

describe("/Searchbar", () => {
  // Globals
  let compGlobal;

  // Props
  const props = {
    placeholder: 'Search',
  };

  it('should render self', () => {
    compGlobal = mount(
      <Searchbar {...props} />
    );

    expect(compGlobal.find('input').hasClass('form-control')).to.be.equal(true);
  });
});
