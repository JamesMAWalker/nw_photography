import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import { PHOTO_DATA } from '../../data-store/photos.data';


const PhotoSingle = (props) => {
  const [isToggled, setToggle] = useState(false);

  const style = {
    backgroundImage: `url(${props.link})`,
  }

  const togglePic = () => {
    setInterval(() => {
      setToggle(!isToggled);
    }, 2000);
  }

  return (
        <img style={style} className='photo-single' alt=""/>
    );
}

export default PhotoSingle;