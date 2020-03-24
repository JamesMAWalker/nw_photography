import React, { Component } from 'react';

class PhotoLarge extends Component {
  
  adjustCrop = name => {
    if (name === 'balloons') {
      return '--50';
    } else if (name === 'float') {
      return '--33'
    }
  };

  render() {
    const { alt, src, key } = this.props;

    const photoPos = this.adjustCrop(alt);

    console.log(photoPos);
    

    return (
      <img
        key={key}
        src={src}
        alt={alt}
        className={`photo--large photo--large${photoPos}`}
      />
    );
  }
}

export default PhotoLarge;