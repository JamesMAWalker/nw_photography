import React, { Component } from 'react';

import MenuContainer from '../2-menu/menu-container.component';
import PhotoContainer from '../1-photo/photo-container.component';

class HomePage extends Component {

  render() {
    let pathName = this.props.location.pathname.replace('/', '');

    return (
      <div className='App'>
        <MenuContainer />
        <PhotoContainer currCat={pathName} />
      </div>
    );
  } 
}

export default HomePage;