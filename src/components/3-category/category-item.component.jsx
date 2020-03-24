import React, { Component } from 'react';

class CategoryItem extends Component {

  handleClick = (evt) => {
    let {name, changeCat} = this.props;
    
    changeCat(evt);
  }

  render() {
    const { currCat, name, indPos } = this.props;
    let activate = currCat === name ? 'category__item--active' : '';
    console.log(indPos);
    
  
    return (
      <span onClick={this.handleClick} name={name} className={`category__item ${activate} ${indPos}`}>{name}</span>
    );
  }
}

export default CategoryItem;