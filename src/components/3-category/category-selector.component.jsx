import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

import CategoryItem from './category-item.component';
import { withRouter } from 'react-router-dom';

import { PHOTO_DATA } from '../../data-store/photos.data';

class CategorySelector extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      categories: Object.values(PHOTO_DATA)
    }
  }
  

  render() {
    const { categories } = this.state;
    const { currCat, history } = this.props;
    
    let style = {
      zIndex: currCat === 'calories' ? '99' : '1',
      boxShadow: currCat === 'calories' ? '2px 2px 13px 0px rgba(84,84,84,1)' : 'none'
    }

    console.log(style);
    

    return (
      <div className='category-selector' style={style}>
        {categories.map((cat) => (
          <CategoryItem
            key={uuid()}
            currCat={currCat}
            indPos={`category__item--${categories.indexOf(cat) + 1}`}
            changeCat={history.push}
            name={cat.name.toLowerCase()}
          />
        ))}
      </div>
    );
  }
}

export default withRouter(CategorySelector);