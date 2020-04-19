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
    const { currCat, prevState } = this.props;
    console.log(currCat);
    
    const { [currCat]: cat } = this.state;
    

    // console.log(prevState);
    // TODO: Passed in previous photo identifiers. Just need to correlate them to the dispalyed photo somehow. 

    const settings = {
      fade: currCat === 'dreams' ? true : false,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 4,
      pauseOnHover: false,
      slidesToScroll: 1,
      swipeToSlide: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };

    return (
      <Slider className="selector__slider" {...settings}>
        {
          cat.map((photo) => (
            <PhotoLarge 
              catID={currCat}
              photoID={photo.name}
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