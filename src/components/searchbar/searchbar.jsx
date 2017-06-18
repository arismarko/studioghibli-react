import React, { Component, PropTypes } from 'react';

// Styles
import './searchbar.scss';

export class Searchbar extends Component {
  constructor(prop) {
    super(prop);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.props.handleChange(event.target.value);
  }

  render() {
    return (
      <div className="searchbar input-group input-group-unstyled">
        <input
          type="text"
          className="form-control"
          onChange={this.handleSearch}
          placeholder={this.props.placeholder}
        />
        <span className="input-group-addon">
          <i className="fa fa-search" />
        </span>
      </div>
    );
  }
}

Searchbar.propTypes = {
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Searchbar;
