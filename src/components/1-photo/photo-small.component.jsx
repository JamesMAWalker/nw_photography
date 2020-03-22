import React, { Component } from 'react';

class PhotoSmall extends Component {
  render() {
    const { alt, src, bgco } = this.props;
    
    const plchColor = {
      backgroundColor: bgco
    }

    return (
      <img style={plchColor} className="photo--small" src={src} alt={alt} />
    );
  }
}

export default PhotoSmall;