import React, { Component } from 'react';

import MenuContainer from '../2-menu/menu-container.component';
import PhotoContainer from '../1-photo/photo-container.component';
import CategorySelector from '../3-category/category-selector.component';

class CategoryPage extends Component {

  renderSelector = () => {
    const { catID } = this.props.match.params;
    return <CategorySelector currCat={catID} />;
  };

  render() {
    const { catID } = this.props.match.params;
    let prevState;
    if (this.props.location.state) {
      prevState = this.props.location.state;
    }

    return (
      <div className='App'>
        <MenuContainer />
        <PhotoContainer currCat={catID} prevState={prevState} />
        {this.renderSelector()}
      </div>
    );
  }
}

export default CategoryPage;
