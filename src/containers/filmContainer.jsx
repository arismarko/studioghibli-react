import React, { Component, PropTypes } from 'react';
import { Film } from '../components/film/film.jsx';

export class FilmContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedFilm: [], films: [] };
  }

  componentDidMount() {
    this.context.store.subscribe(() => {
      this.setState({
        selectedFilm: this.getSelectedFilm(this.context.store.getState().films,
        this.props.match.params.name),
        films: this.context.store.getState().films,
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.name !== nextProps.match.params.name) {
      this.setState({
        selectedFilm: this.getSelectedFilm(this.state.films, nextProps.match.params.name),
      });
    }
  }

  getSelectedFilm(films, id) {
    const filmSelected = films.filter((film) => {
      return film.id === id;
    });
    return filmSelected;
  }

  printSelectedFilm() {
    let selectedFilm = this.getSelectedFilm(this.context.store.getState().films,
    this.props.match.params.name);


    if (selectedFilm.length > 0) {
      selectedFilm = <Film selected={selectedFilm[0]} />;
    }

    return selectedFilm;
  }

  render() {
    return (
      <div>
        {this.printSelectedFilm()}
      </div>
    );
  }
}

FilmContainer.propTypes = {
  match: PropTypes.object.isRequired,
};


FilmContainer.contextTypes = {
  store: React.PropTypes.object,
};
