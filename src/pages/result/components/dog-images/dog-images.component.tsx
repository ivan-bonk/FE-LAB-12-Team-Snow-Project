import React, { useRef } from 'react';

// Hardcoded photos
import corgi1 from './images/corgi1.jpg';
import corgi2Small2 from './images/corgi2-small2.jpg';
import corgi3Small2 from './images/corgi3-small2.jpg';

//images folder is temporary
import styles from './dog-images.module.scss';

export const DogImages: React.FC = (): React.ReactElement => {
  const selectedImage = useRef<HTMLImageElement>(null);

  return (
    <div className={styles.dogImagesContainer}>
      <div className={styles.dogImagesContainer__selectedImageContainer}>
        <img src={corgi1} className={styles.image} ref={selectedImage} alt="Corgi1" />
      </div>
      <div className={styles.dogImagesContainer__nonSelectedImagesContainer}>
        <div>
          <img
            src={corgi2Small2}
            className={`${styles.image} ${styles.dogImagesContainer__nonSelectedImagesContainer__nonSelectedImages}`}
            alt="Corgi2"
          />
        </div>
        <div>
          <img
            src={corgi3Small2}
            className={`${styles.image} ${styles.dogImagesContainer__nonSelectedImagesContainer__nonSelectedImages}`}
            alt="Corgi3"
          />
        </div>
      </div>
    </div>
  );
};
