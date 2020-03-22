import React, { Component } from 'react';

class CategoryItem extends Component {

  handleClick = (evt) => {
    let {name, changeCat} = this.props;
    
    changeCat(evt);
  }

  render() {
    const { currCat, name } = this.props;
    let activate = currCat === name ? 'category__name--active' : '';
  
    return (
      <span onClick={this.handleClick} name={name} className={`category__name ${activate}`}>{name}</span>
    );
  }
}

export default CategoryItem;