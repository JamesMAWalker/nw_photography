import React, { Component } from 'react';
import Slider from 'react-slick';
import { PHOTO_DATA } from '../../data-store/photos.data';


class PhotoSlider extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      coverPhotos: Object.values(PHOTO_DATA.coverPhotos.photos)
    };
  }
  
  render() {
    const settings = {
      fade: true,
      infinite: true,
      speed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: false,
      autoplaySpeed: 1900,
    };

    return (
      <Slider
        // ref={slider => (this.slider = slider)}
        className='photo-slider'
        {...settings}
      >
        {this.state.coverPhotos.map(photo => (
          <img
            className='photo-single'
            src={photo.link}
            alt={photo.name}
            key={photo.name}
            name='home'
          />
        ))}
      </Slider>
    );
  }
}

export default PhotoSlider;
