import React, { Component } from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';

import MenuContainer from './components/2-menu/menu-container.component';
import PhotoContainer from './components/1-photo/photo-container.component';
import CategorySelector from './components/3-category/category-selector.component';

import { ReactComponent as Logo } from './Icons/logo-icon.svg';

import './sass/main.css'

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      menuIsOpen: false,
      gridIsOpen: false,
      currCat: ''
    };
  }
  
  toggleMenu = () => {
    this.setState(st => ({ menuIsOpen: !st.menuIsOpen }))
  }

  toggleGrid = (evt) => {
    let clickedCat = evt.target.getAttribute('name').toLowerCase();
    console.log(clickedCat);
    

    if (clickedCat === 'calories') {
      this.setState(st => ({ 
        gridIsOpen: !st.gridIsOpen, 
        // currCat: clickedCat
      }));
    }
  }

  changeCat = (evt) => {
    let clickedCat = evt.target.getAttribute('name').toLowerCase();

    this.setState({ currCat: clickedCat })
  }

  render() {
    let { menuIsOpen, gridIsOpen, currCat } = this.state;
    

    if (menuIsOpen) {
      return (
        <div className='App'>
          <MenuContainer
            toggleGrid={this.toggleGrid}
            menuIsOpen={menuIsOpen}
            toggleMenu={this.toggleMenu}
            changeCat={this.changeCat}
            currCat={currCat}
          />
          <PhotoContainer
            menuIsOpen={menuIsOpen}
            gridIsOpen={gridIsOpen}
            toggleMenu={this.toggleMenu}
            currCat={currCat}
          />
          <CategorySelector changeCat={this.changeCat} currCat={currCat} />
        </div>
      );
    } else {
      return (
        <div className='App'>
          <Logo className='site-logo--photo' />
          <PhotoContainer
            toggleMenu={this.toggleMenu}
            menuIsOpen={menuIsOpen}
          />
        </div>
      );
    }

    
  }
}

export default App;
