import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { PHOTO_DATA } from '../../data-store/photos.data';

import { ReactComponent as PrevArrow } from '../../Icons/fancier-arr-dark-L.svg';
import { ReactComponent as NextArrow } from '../../Icons/fancier-arr-dark-R.svg';

class FullPhotoPage extends Component {

  constructor(props) {
    super(props);
    
    const { catID } = this.props.match.params;
    
    this.state = {
      photoData: PHOTO_DATA,
      catPhotos: Object.values(PHOTO_DATA[catID].photos),
      currPhoto: ''
    };
  }

  componentDidMount() {
    const { photoID } = this.props.match.params;

    let newPhotoIdx = this.state.catPhotos.findIndex((e) => e.name === photoID);

    let newPhoto = this.state.catPhotos[newPhotoIdx]

    this.setState({ currPhoto: newPhoto });
    
  }
  
  changePhoto = (e) => {
    const { catPhotos, currPhoto } = this.state;
   
    console.log(e.currentTarget.getAttribute('value'));
    
    let val = parseInt(e.currentTarget.getAttribute('value'), 10);
    let currIdx = catPhotos.indexOf(currPhoto);

    console.log(currIdx);
    
    if (currIdx >= 0 && currIdx < catPhotos.length - 1 && val !== -1) {
      this.setState((st) => ({
        currPhoto: this.state.catPhotos[currIdx + val],
      }));
    } else if (currIdx === catPhotos.length -1) {
      this.setState((st) => ({
        currPhoto: this.state.catPhotos[0],
      }));
    } else if (currIdx === 0 && val === -1) {
      this.setState((st) => ({
        currPhoto: this.state.catPhotos[st.catPhotos.length - 1],
      }));
    }
  }

  


  render() {
    const { currPhoto, catPhotos } = this.state;
    const { catID, photoID } = this.props.match.params;
     console.log(catPhotos);
    const imgUrl = currPhoto.link;
    // const imgUrl = photoData[catID].photos[photoID]
  

    return (
      <div>
        <div className='full-photo__container'>
          <img src={`${imgUrl}`} alt='' className='full-photo__photo' />
        </div>
        <div className='bottom-nav'>
          <Link to={`/${catID}`} className='bottom-nav__category-indicator'>[ {catID} ]</Link>
          <div className='bottom-nav__arrows-container'>
            <span onClick={this.changePhoto} value={-1} className='arr-prev'>
              <PrevArrow/>
            </span>
            <span onClick={this.changePhoto} value={1} className='arr-next'>
              <NextArrow/>
            </span>
          </div>
          <Link
            className='btn-close'
            to={{
              pathname: `/${catID}`,
              state: {
                prevPhoto: photoID,
                prevCat: catID,
              },
            }}
          >
            X
          </Link>
        </div>
      </div>
    );
  }
}

export default FullPhotoPage;