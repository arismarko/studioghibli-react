import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavBar } from '../components/navbar/navbar.jsx';

import * as actions from '../actions/films.jsx';

class NavContainer extends Component {
  componentWillMount() {
    this.props.actions.loadAllFilms();
    this.context.store.subscribe(() => {
      this.handleFilmChange = this.handleFilmChange.bind(this);
    });
  }

  handleFilmChange(url) {
    this.context.router.history.push(url);
  }


  render() {
    const { films } = this.props;
    return (
      <div>
        <NavBar films={films} handleFilmChange={this.handleFilmChange} />
      </div>
    );
  }
}

NavContainer.propTypes = {
  actions: PropTypes.object,
  films: PropTypes.array,
};

NavContainer.defaultProps = {
  actions: () => {},
  films: [],
};

const mapStateToProps = (state) => {
  return {
    films: state.films,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) };
};

NavContainer.contextTypes = {
  store: React.PropTypes.object,
  router: React.PropTypes.shape({
    history: React.PropTypes.object.isRequired,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);
