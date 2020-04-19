import React, { Component } from 'react';

import MenuContainer from '../2-menu/menu-container.component';
import PhotoContainer from '../1-photo/photo-container.component';

import { ReactComponent as Logo } from '../../Icons/logo-icon-shadow.svg';

class LandingPage extends Component {

  toHome = () => {
    this.props.history.push('/home')
  }

  render() {
    return (
      <div className='App'>
        <Logo
          style={{ cursor: 'pointer' }}
          className='site-logo--photo'
          name='home'
          onClick={this.toHome}
        />
        <PhotoContainer toHome={this.toHome}  />
      </div>
    );
  }
}

export default LandingPage;