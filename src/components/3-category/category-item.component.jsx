import React, { Component } from 'react';

class CategoryItem extends Component {

  handleClick = (evt) => {
    let {name, changeCat} = this.props;
    
    changeCat(evt);
  }

  render() {
    const { currCat, name, indPos } = this.props;
    let activate = currCat === name ? 'category__item--active' : '';
    let removeCat = name === 'coverphotos' ? 'none' : 'flex';
    
    let style = {
      display: removeCat
    }
    
    // TODO: Try to create a movable indicator. Explore options for movement other than grid cells
    return (
      <span onClick={this.handleClick} name={name} style={style} className={`category__item ${activate} ${indPos}`}>{name}</span>
    );
  }
}

export default CategoryItem;