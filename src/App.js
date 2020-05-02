import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { CSSTransition, TransitionGroup} from 'react-transition-group';

import HomePage from './components/4-pages/home-page.component';
import AboutPage from './components/4-pages/about-page.component';
import CategoryPage from './components/4-pages/category-page.component';
import ContactPage from './components/4-pages/contact-page.component';
import FullPhotoPage from './components/4-pages/full-photo-page.component';
import LandingPage from './components/4-pages/landing-page.component';

import { ReactComponent as Logo } from './Icons/logo-icon-shadow.svg';

import './sass/main.css'

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' render={(rp) => <LandingPage {...rp} />} />
        <Route exact path='/home' render={(rp) => <HomePage {...rp} />} />
        <Route exact path='/about' render={(rp) => <AboutPage {...rp}/> } />
        <Route exact path='/contact' render={(rp) => <ContactPage {...rp}/> } />
        <Route exact path='/:catID' render={(rp) => <CategoryPage {...rp} />} />
        <Route exact path='/:catID/:photoID' render={(rp) => <FullPhotoPage {...rp}/> } />
      </Switch>
    );
  }
}

export default App;
