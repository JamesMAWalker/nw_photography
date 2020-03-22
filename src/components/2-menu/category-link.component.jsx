import React, { Component } from 'react';

class CategoryLink extends Component {
  
  handleClick = (evt) => {
    const { changeCat } = this.props;
    
    changeCat(evt);
  }

  render() {
    const { name } = this.props;

    return (
      <div>
        <span name={name} onClick={this.handleClick} className="category__link">{name}</span>
      </div>
    );
  }
}

export default CategoryLink;