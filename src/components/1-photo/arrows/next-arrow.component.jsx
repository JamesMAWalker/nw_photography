import React, { Component } from 'react';
import { ReactComponent as NextArr } from '../../../Icons/shadow-arr-R.svg';

export default function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <NextArr
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}
