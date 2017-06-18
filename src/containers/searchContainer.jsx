import React, { Component, PropTypes } from 'react';
import { Listings } from '../components/listings/listings.jsx';

export class SearchContainer extends Component {
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
        results: this.getResults(this.context.store.getState().films,
        this.props.match.params.key),
        films: this.context.store.getState().films,
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.key !== nextProps.match.params.key) {
      this.setState({
        results: this.getResults(this.state.films, nextProps.match.params.key),
      });
    }
  }

  getResults(films, title) {
    const results = films.filter((film) => {
      return film.title.toLowerCase().indexOf(title.toLowerCase()) > -1;
    });

    return results;
  }

  printResults() {
    let results = this.getResults(this.context.store.getState().films,
       this.props.match.params.key);

    if (results.length > 0) {
      results = <Listings items={results} />;
    }

    return results;
  }

  render() {
    return (
      <div className="margin-top-10">
        {this.printResults()}
      </div>
    );
  }
}

SearchContainer.propTypes = {
  match: PropTypes.object.isRequired,
};


SearchContainer.contextTypes = {
  store: React.PropTypes.object,
};
