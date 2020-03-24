import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import Slider from 'react-slick';

import { PHOTO_DATA } from '../../data-store/photos.data';
import PhotoLarge from './photo-large.component';
import NextArrow from './arrows/next-arrow.component';
import PrevArrow from './arrows/prev-arrow.component';

class SelectorSlider extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      dreams: Object.values(PHOTO_DATA.dreams.photos),
      editorial: Object.values(PHOTO_DATA.editorial.photos),
    }
  }
  

  render() {
    const { currCat } = this.props;
    const { [currCat]: cat } = this.state;

    const settings = {
      fade: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 4,
      pauseOnHover: false,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };

    return (
      <Slider className="selector__slider" {...settings}>
        {
          cat.map(photo => (
            <PhotoLarge 
              key={uuid()} 
              src={photo.link} 
              alt={photo.name}/>
          ))
        }
      </Slider>
    );
  }
}

export default SelectorSlider;