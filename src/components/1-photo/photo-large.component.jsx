import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class PhotoLarge extends Component {
  
  adjustCrop = name => {
    if (name === 'balloons') {
      return '--50';
    } else if (name === 'float') {
      return '--33'
    }
  };

  handleClick = () => {
    const { catID, photoID, history } = this.props;
    history.push(`/${catID}/${photoID}`);
  }

  render() {
    const { alt, src, key } = this.props;

    const photoPos = this.adjustCrop(alt);

    return (
      <img
        onClick={this.handleClick}
        key={key}
        src={src}
        alt={alt}
        className={`photo--large photo--large${photoPos}`}
      />
    );
  }
}

export default withRouter(PhotoLarge);