import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

import { PHOTO_DATA } from '../../data-store/photos.data';

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

    return (
      <div className="selector-slider">
        {
          cat.map(photo => (
            <img key={uuid()} src={photo.link} alt={photo.name} className="photo--small"/>
          ))
        }
      </div>
    );
  }
}

export default SelectorSlider;