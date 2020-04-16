import React, { Component } from 'react';

class PhotoSmall extends Component {
  
  adjustCrop = name => {
    if (name === 'the_BEET') {
      return '50% 75%'
    } else if (name === 'glasses_man') {
      return 'top'  
    } else if (name === 'intense_girl') {
      return '20% 20%'  
    } else if (name === 'dog_hat') {
      return '45% 20%'  
    } else if (name === 'white_black_girl') {
      return '68%'  
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