import React, { Component } from 'react';

class PhotoSmall extends Component {
  
  adjustCrop = name => {
    if (name === 'the_BEET') {
      return '0 75%'
    } else if (name === 'glasses_man') {
      return 'top'  
    } else {
      return 'center'
    }
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