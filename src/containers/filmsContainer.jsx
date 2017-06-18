import React, { Component, PropTypes } from 'react';
import { Listings } from '../components/listings/listings.jsx';

export class FilmsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      films: [],
    };
  }

  componentDidMount() {
    this.context.store.subscribe(() => {
      this.setState({
        films: this.context.store.getState().films,
      });
    });
  }

  printResults() {
    let films = this.context.store.getState().films;

    if (films.length > 0) {
      films = <Listings items={films} />;
    }

    return films;
  }

  render() {
    return (
      <div className="margin-top-10">
        {this.printResults()}
      </div>
    );
  }
}

FilmsContainer.propTypes = {
  match: PropTypes.object.isRequired,
};


FilmsContainer.contextTypes = {
  store: React.PropTypes.object,
};
