import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

import PhotoSmall from './photo-small.component';

import { PHOTO_DATA } from '../../data-store/photos.data';

class PortraitGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portrait: Object.values(PHOTO_DATA.portrait.photos)
    };
  }

  render() {
    const { portrait } = this.state;
    const { currCat } = this.props;

    const col1 = portrait.slice(0, 3);
    const col2 = portrait.slice(3, 5);
    const col3 = portrait.slice(5, 7);
    const cols = [col1, col2, col3];

    return (
      <div className='portrait__grid'>
        {cols.map(col => (
          <div className={`portrait__col portrait__col--${cols.indexOf(col) + 1}`}>
            {col.map(port => (
              <PhotoSmall
                className='photo--small'
                alt={port.name}
                src={port.link}
                key={uuid()}
                bgco={port.bgco}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default PortraitGrid;