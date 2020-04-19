import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import PhotoSlider from './photo-slider.component';
import LandGrid from './land-grid.component';
import PortraitGrid from './portrait-grid.component';
import SelectorSlider from './selector-slider.component';


class PhotoContainer extends Component {

  
  resize = () => {
    const { currCat } = this.props;
    let contSize;

    if (currCat !== undefined) {
      contSize = currCat !== 'home' ? '78' : '85';
    } else if (currCat === undefined) {
      contSize = '100'
    }    
    return contSize;
  }

  handleClick = () => {
    const { pathname } = this.props.location;
    
    if (pathname === '/') {
      this.props.toHome()
    }
  }

  render() {
    let { currCat, prevState } = this.props;

      if (currCat === 'home' || currCat === undefined) {
        return (
          <div
            onClick={this.handleClick}
            className={`photo-container photo-container--${this.resize()}`}
          >
            <PhotoSlider />
          </div>
        );
      } else if (currCat === 'calories') {
        return (
          <div className={`photo-container photo-container--${this.resize()}`}>
            <LandGrid currCat={currCat} />
          </div>
        );
      } else if (currCat === 'portrait') {
        return (
          <div className={`photo-container photo-container--${this.resize()}`}>
            <PortraitGrid currCat={currCat} />
          </div>
        )
      } else if (currCat === 'dreams' || 'editorial') {
        return (
          <div className={`photo-container photo-container--${this.resize()}`}>
            <SelectorSlider currCat={currCat} prevState={prevState} />
          </div>
        );
      }
  }
}

export default withRouter(PhotoContainer);