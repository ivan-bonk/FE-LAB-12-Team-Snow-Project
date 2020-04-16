import React from 'react';
import styles from './App.module.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ROUTES } from 'shared/constants/routes.constants';
import { LandinPage } from 'pages/landing-page/landing-page.component';
import { Result } from 'pages/result/result.component';
import { Pet } from 'pages/pet/pet.component';
import { Comparison } from 'pages/comparison/comparison.component';
import { Filter } from 'pages/filter/filter.component';
import { PetCare } from 'pages/pet-care/pet-care.component';
import { StarterPack } from 'pages/starter-pack/starter-pack.component';
import { QuizPage } from './pages/quiz-page/quiz-page.component';

import { Header } from './shared/components/header/header.component';
import { Footer } from 'shared/components/footer/footer.component';

function App() {
  return (
    <Router>
      <Header />
      <div className={styles.appWrapper} id="app-wrapper">
        <Switch>
          <Route exact path={ROUTES.home} component={LandinPage}></Route>
          <Route path={ROUTES.result} component={Result}></Route>
          <Route path={ROUTES.pet.path} component={Pet}></Route>
          <Route path={ROUTES.starterPack.path} component={StarterPack}></Route>
          <Route path={ROUTES.comparison} component={Comparison}></Route>
          <Route path={ROUTES.filter} component={Filter}></Route>
          <Route path={ROUTES.quiz} component={QuizPage} />
          <Route path={ROUTES.care} component={PetCare}></Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
