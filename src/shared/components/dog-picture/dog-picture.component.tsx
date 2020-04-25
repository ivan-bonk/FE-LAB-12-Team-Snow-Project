import React, { useState } from 'react';
import style from './dog-picture.module.scss';
import { DogPictureProps } from './dog-picture.interfaces';

export const DogPicture: React.FC<DogPictureProps> = props => {
  const [dogPictureIndex, setDogPictureIndex] = useState(0);
  const dogImages = props.images;

  const nextImage = () => {
    const end = 2;
    const nextNumber = dogPictureIndex === end ? 0 : dogPictureIndex + 1;
    setDogPictureIndex(nextNumber);
  };
  return (
    <div className={style.dogPicContainer}>
      <span className={style.counter}>{dogPictureIndex + 1} / 3</span>
      <img className={style.dogPic} src={dogImages[dogPictureIndex]} alt="Some dog" />
      <span className={style.arrow} onClick={nextImage}>
        <span className="material-icons">double_arrow</span>
      </span>
    </div>
  );
};
