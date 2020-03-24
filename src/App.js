import React, { Component } from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';

import MenuContainer from './components/2-menu/menu-container.component';
import PhotoContainer from './components/1-photo/photo-container.component';
import CategorySelector from './components/3-category/category-selector.component';

import { ReactComponent as Logo } from './Icons/logo-icon-shadow.svg';

import './sass/main.css'

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      menuIsOpen: false,
      currCat: undefined
    };
  }
  
  toggleMenu = () => {
    this.setState(st => ({ menuIsOpen: !st.menuIsOpen }))
  }

  changeCat = (evt) => {
    let clickedCat = evt.target.getAttribute('name').toLowerCase();

    this.setState({ currCat: clickedCat })
  }

  renderSelector = () => {
    const { currCat } = this.state; 

    if (currCat !== 'home' && currCat !== undefined) {
      return <CategorySelector changeCat={this.changeCat} currCat={currCat} />;
    } else {
      return null;
    }
  }

  render() {
    let { menuIsOpen, currCat } = this.state;
    

    if (currCat !== undefined) {
      return (
        <div className='App'>
          <MenuContainer
            currCat={currCat}
            changeCat={this.changeCat}
          />
          <PhotoContainer
            changeCat={this.changeCat}
            currCat={currCat}
          />
          {this.renderSelector()}
        </div>
      );
    } else {
      return (
        <div className='App'>
          <Logo className='site-logo--photo' />
          <PhotoContainer
            toggleMenu={this.toggleMenu}
            menuIsOpen={menuIsOpen}
            changeCat={this.changeCat}
          />
        </div>
      );
    }

    
  }
}

export default App;
