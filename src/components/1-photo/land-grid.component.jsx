import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

import PhotoSmall from './photo-small.component';

import { PHOTO_DATA } from '../../data-store/photos.data';

class LandGrid extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      calories: Object.values(PHOTO_DATA.calories.photos),
    }
  }
  
  render() {
    const { calories } = this.state;
    const { currCat } = this.props;

    const row1 = calories.slice(0,3);
    const row2 = calories.slice(3,6);
    const row3 = calories.slice(6,9);
    const rows = [row1, row2, row3];

    if (currCat === 'calories') {
      return (
        <div className='photo__grid'>
          {rows.map(row => (
            <div key={uuid()} className={`photo-row photo-row--${rows.indexOf(row) + 1}`}>
              {row.map(cal => (
                <PhotoSmall
                  className='photo--small'
                  alt={cal.name}
                  src={cal.link}
                  key={uuid()}
                  bgco={cal.bgco}
                />
              ))}
            </div>
          ))}
        </div>
      );
    }
  }
}

export default LandGrid;