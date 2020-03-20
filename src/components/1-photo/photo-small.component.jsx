import React, { Component } from 'react';

class PhotoSmall extends Component {
  render() {
    const { alt, src, key } = this.props;
    
    return (
      <img className="photo--small" src={src} alt={alt} key={key} />
    );
  }
}

export default PhotoSmall;