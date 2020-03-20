import React, { Component } from 'react';

class CategoryItem extends Component {

  render() {
    const { currCat, name } = this.props;
    let activate = currCat === name ? 'category__name--active' : '';
  
    return (
      <span className={`category__name ${activate}`}>{name}</span>
    );
  }
}

export default CategoryItem;