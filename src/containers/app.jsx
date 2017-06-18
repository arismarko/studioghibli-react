import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import NavContainer from './navContainer.jsx';
import { FilmContainer } from './filmContainer.jsx';
import { SearchContainer } from './searchContainer.jsx';
import { FilmsContainer } from './filmsContainer.jsx';

const history = createBrowserHistory();

const App = () => (
  <BrowserRouter history={history}>
    <div>
      <NavContainer />
      <Route path="/search/:key" component={SearchContainer} />
      <Route path="/:name" component={FilmContainer} />
      <Route exact path="/" component={FilmsContainer} />
      <Route exact path="/search" component={FilmsContainer} />
    </div>
  </BrowserRouter>
);

export default App;
