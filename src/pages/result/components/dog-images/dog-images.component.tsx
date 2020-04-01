import React, { useRef } from 'react';

// Hardcoded photos
import corgi1 from './images/corgi1.jpg';
import corgi2Small2 from './images/corgi2-small2.jpg';
import corgi3Small2 from './images/corgi3-small2.jpg';

import './dog-images.styles.scss';

export const DogImages: React.FC = (): React.ReactElement => {
  const selectedImage = useRef<HTMLImageElement>(null);

  //Handle clicks on images, something like image-switcher, haven't done yet
  // const handleImageClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>): void => {};

  return (
    <div className="dog-images-container">
      <div className="selected-image-container">
        <img src={corgi1} className="image" ref={selectedImage} alt="Corgi1" />
      </div>
      <div className="non-selected-images-container">
        <div className="image-container">
          <img src={corgi2Small2} className="image non-selected-image" alt="Corgi2" />
        </div>
        <div className="image-container">
          <img src={corgi3Small2} className="image non-selected-image" alt="Corgi3" />
        </div>
      </div>
    </div>
  );
};
