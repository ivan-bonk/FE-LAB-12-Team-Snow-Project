import React, { useRef } from 'react';

import { DogImagesProps } from './dog-images.interfaces';

import styles from './dog-images.module.scss';

export const DogImages: React.FC<DogImagesProps> = props => {
  const selectedImage = useRef<HTMLImageElement>(null);

  const firstImage = props.images[0];
  const secondImage = props.images[1];
  const thirdImage = props.images[2];

  return (
    <div className={styles.dogImagesContainer}>
      <div className={styles.dogImagesContainer__selectedImageContainer}>
        <img src={firstImage} className={styles.image} ref={selectedImage} alt="Dog" />
      </div>
      <div className={styles.dogImagesContainer__nonSelectedImagesContainer}>
        <div>
          <img
            src={secondImage}
            className={`${styles.image} ${styles.dogImagesContainer__nonSelectedImagesContainer__nonSelectedImages}`}
            alt="Dog"
          />
        </div>
        <div>
          <img
            src={thirdImage}
            className={`${styles.image} ${styles.dogImagesContainer__nonSelectedImagesContainer__nonSelectedImages}`}
            alt="Dog"
          />
        </div>
        <div>
          <img
            src={firstImage}
            className={`${styles.image} ${styles.dogImagesContainer__nonSelectedImagesContainer__nonSelectedImages}`}
            alt="Dog"
          />
        </div>
      </div>
    </div>
  );
};
