import React, { PropTypes, Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Searchbar } from '../searchbar/searchbar.jsx';

import './navbar.scss';

export class NavBar extends Component {
  handleSearch(event) {
    this.props.handleFilmChange(`/search/${event}`);
  }

  render() {
    return (
      <nav id="nav" className="main-menu navbar flat">
        <div className="container">
          <div className="col-xs-12">
            <Searchbar
              placeholder="Search for a movie title"
              handleChange={(event) => {
                this.handleSearch(event);
              }}
            />
          </div>
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  films: PropTypes.array.isRequired,
  handleFilmChange: PropTypes.func.isRequired,
};


export default withRouter(NavBar);
