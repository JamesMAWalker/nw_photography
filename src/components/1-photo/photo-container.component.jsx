import React, { Component } from 'react';

// import PhotoSingle from './photo-single.component';
import PhotoSlider from './photo-slider.component';
import PhotoGrid from './photo-grid.component';

import { PHOTO_DATA } from '../../data-store/photos.data';

class PhotoContainer extends Component {

  constructor(props) {
    super(props);

    const photos = PHOTO_DATA.editorial.photos
    
    this.state = {
      editLinks: [
        photos.editTwo.link,
        photos.editThree.link,
        photos.editFour.link,
        photos.editFive.link
      ],
      mainPhoto: photos.editTwo.link
    };
  }

  handleClick = () => {
    this.props.toggleMenu()
  }

  render() {
    let { menuIsOpen, gridIsOpen, currCat } = this.props;

    let fullPart = menuIsOpen ? 'part' : 'full';

    if (gridIsOpen || currCat === 'calories' || currCat === 'portrait') {
      return (
        <div className={`photo-container photo-container--${fullPart}`}>
          <PhotoGrid currCat={currCat} />
        </div>
      );
    } else {
      return (
        <div
          onClick={this.handleClick}
          className={`photo-container photo-container--${fullPart}`}
        >
          <PhotoSlider />
        </div>
      );
    }
  }
}

export default PhotoContainer;