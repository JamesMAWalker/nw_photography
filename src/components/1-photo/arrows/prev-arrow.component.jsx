import React, { Component } from 'react';
import { ReactComponent as PrevArr } from '../../../Icons/fancier-arr-white-L.svg';

export default function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <PrevArr
      className={className}
      style={{ ...style, display: 'block'}}
      onClick={onClick}
    />
  );
}
