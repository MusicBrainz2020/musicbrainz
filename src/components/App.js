import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Albums from '../containers/Albums';
import ArtistContainer from '../containers/ArtistContainer';
import Lyrics from './lyrics/Lyrics';
import Header from './common/Header';
import Recordings from '../containers/Recordings';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={ArtistContainer} />
        <Route path='/albums/:artistId' component={Albums} />
        <Route path='/recording/:albumId' component={Recordings} />
        <Route path='/lyrics/:id' component={Lyrics} />
      </Switch>
    </Router>
  );
}

