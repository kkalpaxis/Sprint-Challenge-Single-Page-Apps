import React from 'react'
import { Switch, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage.js';
import CharacterList from './components/CharacterList.js';
import LocationList from '../components/LocationList.js/index.js';
import EpisodesList from './components/EpisodesList.js';

export default function AppRouter() {
  return <div className="page-view ui bottom attached segment active tab">
    <Switch>
    <Route exact path="/" component = {WelcomePage} />
    <Route path="/characters" component = {CharacterList} />
    <Route path="/locations" component = {LocationList} />
    <Route path="/episodes" component = {EpisodesList} />
    </Switch>
  </div>

}
