import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PHOTO_DATA } from '../../data-store/photos.data';

class FullPhotoPage extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      photoData: PHOTO_DATA 
    };
  }


  render() {
    const { photoData } = this.state;
    const { catID, photoID } = this.props.match.params;
    
    const imgUrl = photoData[catID].photos[photoID].link;

    return (
      <div>
        <div className='full-photo__container'>
          <img src={imgUrl} alt='' className='full-photo__photo' />
        </div>
        <div className='bottom-nav'>
          <span className='bottom-nav__category-inicator'>[ {catID} ]</span>
          <div className='bottom-nav__arrows-container'>
            <span className='arr-next'>&larr;</span>
            <span className='arr-prev'>&rarr;</span>
          </div>
          <Link 
          to={{
            pathname: `/${catID}`,
            state: {
              prevPhoto: photoID,
              prevCat: catID
            }
          }}
          >X</Link>
        </div>
      </div>
    );
  }
}

export default FullPhotoPage;