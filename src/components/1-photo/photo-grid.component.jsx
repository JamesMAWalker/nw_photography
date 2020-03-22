import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

import PhotoSmall from './photo-small.component';

import { PHOTO_DATA } from '../../data-store/photos.data';

class PhotoGrid extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      calories: Object.values(PHOTO_DATA.calories.photos)
    }
  }
  

  render() {
    const { calories } = this.state;
    const { currCat } = this.props;

    let row1 = calories.slice(0,3);
    let row2 = calories.slice(3,6);
    let row3 = calories.slice(6,9);

    

    if (currCat === 'calories') {
      return (
        <div className='photo__grid'>
          <div className='photo-row photo-row--1'>
            {row1.map(cal => (
              <PhotoSmall
                className='photo--small'
                alt={cal.name}
                src={cal.link}
                key={uuid()}
              />
            ))}
          </div>
          <div className='photo-row photo-row--2'>
            {row2.map(cal => (
              <img
                className='photo--small'
                alt={cal.name}
                src={cal.link}
                key={uuid()}
              />
            ))}
          </div>
          <div className='photo-row photo-row--3'>
            {row3.map(cal => (
              <img
                className='photo--small'
                alt={cal.name}
                src={cal.link}
                key={uuid()}
              />
            ))}
          </div>
        </div>
      );
    } else if (currCat === 'portrait') {
      return (
        <h1>Portrait Grid</h1>
      )
    }
  }
}

export default PhotoGrid;