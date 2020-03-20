import React, { Component } from 'react';

class CategoryItem extends Component {

  handleClick = () => {
    let {name, changeCat} = this.props;

    changeCat(name);
  }

  render() {
    const { currCat, name } = this.props;
    let activate = currCat === name ? 'category__name--active' : '';
  
    return (
      <span onClick={this.handleClick} className={`category__name ${activate}`}>{name}</span>
    );
  }
}

export default CategoryItem;