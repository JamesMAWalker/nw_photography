import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../Icons/logo-icon.svg';
import { ReactComponent as Divider } from '../../Icons/title-divider.svg';

class AboutPage extends Component {
  render() {
    return (
      <div className='about'>
        <div className='about__info'>
          <Link>
            <Logo className='about__logo' to='/' />
          </Link>
          <span className='about__header-section'>
            <h1 className='about__heading'>About Nishelle</h1>
            <Divider className='divider' />
          </span>
          <div className='about__text'>
            Nishelle loves to tell stories... through her photography. Her
            stories are based upon daydreams, reality and often a mixture of the
            two - depending on how she see's fit. Through her camera she
            expresses the inner world of both herself and her subjects. Together
            they make magic!
          </div>
        </div>
        <div className='about__photo-section'>
          <img
            src='https://res.cloudinary.com/jameswalker-work/image/upload/f_auto/q_auto/v1588406318/NW_Photography/nisa-flowers_vcgvgc.jpg'
            alt=''
            className='about__photo'
          />
        </div>
      </div>
    );
  }
}

export default AboutPage;