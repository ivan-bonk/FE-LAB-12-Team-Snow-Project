import React, { useRef } from 'react';

// Hardcoden photos
import corgi1 from './images/corgi1.jpg';
import corgi1Small2 from './images/corgi1-small2.jpg';
import corgi2 from './images/corgi2.jpg';
import corgi2Small2 from './images/corgi2-small2.jpg';
import corgi3 from './images/corgi3.jpg';
import corgi3Small2 from './images/corgi3-small2.jpg';

import './dog-images.styles.css';

export const DogImages: React.FC = (): React.ReactElement => {
  const selectedImage = useRef<HTMLImageElement>(null);

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    // const selectedImageSrc = selectedImage.current!.getAttribute('src') + '';
    // const clickedImageSrc = e.currentTarget.getAttribute('src') + '';
    // const selectedImageIndex = selectedImage.current!.getAttribute('alt') + ''.match(/\d+/g)![0];
    // const clickedImageIndex = e.currentTarget.getAttribute('alt') + ''.match(/\d+/g)![0];
    // selectedImage.current!.setAttribute('src', clickedImageSrc + '');
    // e.currentTarget.setAttribute('src', selectedImageSrc + '');
    // console.log(selectedImageIndex);
    // console.log(clickedImageIndex);
  };

  return (
    <div className="dog-images-container">
      <div className="selected-image-container">
        <img src={corgi1} className="image" ref={selectedImage} alt="Corgi1" />
      </div>
      <div className="non-selected-images-container">
        <div className="image-container">
          <img src={corgi2Small2} className="image non-selected-image" alt="Corgi2" onClick={handleImageClick} />
        </div>
        <div className="image-container">
          <img src={corgi3Small2} className="image non-selected-image" alt="Corgi3" onClick={handleImageClick} />
        </div>
      </div>
    </div>
  );
};
