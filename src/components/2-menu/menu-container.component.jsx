import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

import CategoryLink from './category-link.component';
import { ReactComponent as InstaIcon } from '../../Icons/insta-icon.svg'
import { ReactComponent as FHPXIcon } from '../../Icons/500px-icon.svg'
import { ReactComponent as BehanceIcon } from '../../Icons/behance-icon.svg'
import { ReactComponent as Logo } from '../../Icons/logo-icon.svg';

import { PHOTO_DATA } from '../../data-store/photos.data';

class MenuContainer extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      photoData: [
        PHOTO_DATA.calories,
        PHOTO_DATA.portrait,
        PHOTO_DATA.dreams,
        PHOTO_DATA.editorial
      ]
    }; 
  } 

  renderLinks = (list) => {
    const { toggleGrid, changeCat } = this.props;

    return list.map(el => <CategoryLink changeCat={changeCat} toggleGrid={toggleGrid} key={uuid()} name={el.name} />);
  }

  handleLogoClick = (evt) => {
    const { toggleGrid, toggleMenu, changeCat } = this.props;
    // const logoEvt = evt.target.getAttribute('name');
    
    toggleGrid(evt);
    toggleMenu();
    changeCat(evt);
  }
  
  render() {
    let { toggleMenu, menuIsOpen } = this.props;

    let openClose = menuIsOpen ? 'open' : 'closed';
      
    return (
      <div className={`menu-container--${openClose}`}>
        <Logo name="home" onClick={this.handleLogoClick} className='site-logo--menu'/>
        <div className='links__container'>
          {this.renderLinks(this.state.photoData)}
          <div className='menu-divider'></div>
          <p className='page-link'>about</p>
          <p className='page-link'>home</p>
          <p className='page-link'>contact</p>
        </div>

        <div className='icons__container'>
          <InstaIcon className='social-icon' />
          <BehanceIcon className='social-icon' />
          <FHPXIcon className='social-icon' />
        </div>
        <p className='copyright'>NishelleWalkerPhotography &copy;2020</p>
      </div>
    );
  }
}

export default MenuContainer;