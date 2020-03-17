import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ROUTES } from './shared/constants/routes.constants';
import { Home } from './components/Home';
import { Auth } from './components/Auth';
import { Registration } from './components/Registration';
import { Search } from './components/Search';
import { Result } from './components/Result';
import { User } from './components/User';
import { Pet } from './components/Pet';
import { AddPet } from './components/AddPet';
import { Comparison } from './components/Comparison';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.home} component={Home}></Route>
        <Route path={ROUTES.auth} component={Auth}></Route>
        <Route path={ROUTES.registration} component={Registration}></Route>
        <Route path={ROUTES.search} component={Search}></Route>
        <Route path={ROUTES.result} component={Result}></Route>
        <Route path={ROUTES.user} component={User}></Route>
        <Route path={ROUTES.pet} component={Pet}></Route>
        <Route path={ROUTES.addpet} component={AddPet}></Route>
        <Route path={ROUTES.comparison} component={Comparison}></Route>
      </Switch>
    </Router>
  );
}

export default App;
