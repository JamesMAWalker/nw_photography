import React, { Component } from 'react';

class PhotoSmall extends Component {
  
  adjustCrop = name => {
    return name === 'the_BEET' ? '0 75%' : 'center';
  };  

  render() {
    const { alt, src, bgco } = this.props;

    const plchColor = {
      backgroundColor: bgco,
      objectPosition: this.adjustCrop(alt)
    };

    return (
      <img style={plchColor} className='photo--small' src={src} alt={alt} />
    );
  }
}

export default PhotoSmall;