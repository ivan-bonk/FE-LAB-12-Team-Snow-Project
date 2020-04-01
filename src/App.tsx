import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ROUTES } from './shared/constants/routes.constants';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Result } from './pages/result/result.component';
import { User } from './pages/User';
import { Pet } from './pages/pet/pet.component';
import { AddPet } from './pages/AddPet';
import { Comparison } from './pages/comparison/comparison.component';
import { Filter } from './pages/filter/filter.component';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.home} component={Home}></Route>
        <Route path={ROUTES.search} component={Search}></Route>
        <Route path={ROUTES.result} component={Result}></Route>
        <Route path={ROUTES.user} component={User}></Route>
        <Route path={ROUTES.pet('')} component={Pet}></Route>
        <Route path={ROUTES.addpet} component={AddPet}></Route>
        <Route path={ROUTES.comparison} component={Comparison}></Route>
        <Route path={ROUTES.filter} component={Filter}></Route>
      </Switch>
    </Router>
  );
}

export default App;
