import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { withRouter } from 'react-router-dom';

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
        PHOTO_DATA.editorial, 
      ]
    };  
  } 

  renderLinks = (list) => {
    const { history } = this.props;

    return list.map(e => <CategoryLink changeCat={history.push} key={uuid()} name={e.name} />);
  }

  handleLogoClick = () => {
    this.props.history.push('/home')
  }
  
  render() {
      
    return (
      <div className={`menu-container--open`}>
          <Logo
            name='home'
            onClick={this.handleLogoClick}
            className='site-logo--menu'
          />
        <div className='links__container'>
          {this.renderLinks(this.state.photoData)}
          <div className='menu-divider'></div>
          <Link to='/home' className='page-link'>
            home
          </Link>
          <Link to='/about' className='page-link'>
            about
          </Link>
          <Link to='/contact' className='page-link'>
            contact
          </Link>
        </div>

        <div className='icons__container'>
          <a
            target='_blank'
            href='https://www.instagram.com/nishellewalkerphotography/'
          >
            <InstaIcon className='social-icon' />
          </a>
          <a>
            <BehanceIcon className='social-icon' />
          </a>
          <a>
            <FHPXIcon className='social-icon' />
          </a>
        </div>
        <p className='copyright'>NishelleWalkerPhotography &copy;2020</p>
      </div>
    );
  }
}

export default withRouter(MenuContainer);