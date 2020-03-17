import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Auth from './components/Auth';
import Registration from './components/Registration';
import Search from './components/Search';
import Result from './components/Result';
import User from './components/User';
import Pet from './components/Pet';
import AddPet from './components/AddPet';
import Comparison from './components/Comparison';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/auth" component={Auth}></Route>
          <Route exact path="/registration" component={Registration}></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route exact path="/result" component={Result}></Route>
          <Route exact path="/user" component={User}></Route>
          <Route exact path="/pet" component={Pet}></Route>
          <Route exact path="/addpet" component={AddPet}></Route>
          <Route exact path="/comparison" component={Comparison}></Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
