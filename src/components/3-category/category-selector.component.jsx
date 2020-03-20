import React, { Component } from 'react';

import CategoryItem from './category-item.component';

import { PHOTO_DATA } from '../../data-store/photos.data';

class CategorySelector extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      categories: Object.values(PHOTO_DATA)
    }
  }
  
  activateCat = () => {

  }

  render() {
    const { categories } = this.state;
    const { currCat } = this.props;
    console.log(currCat, categories);
    
    return (
      <div className='category-selector'>
        {categories.map(cat => (
          <CategoryItem currCat={currCat} name={cat.name.toLowerCase()}/>
        ))}
      </div>
    );
  }
}

export default CategorySelector;