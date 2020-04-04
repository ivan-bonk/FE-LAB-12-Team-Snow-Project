import React from 'react';
import styles from './body-header.module.scss';

export const BodyHeader: React.FC = () => {
  return (
    <div className={styles.bodyHeader}>
      <h2 className={styles.bodyHeader__title}>Акіта</h2>
      <img
        src="https://besplatka.ua/aws/44/74/44/62/devochka-akita-inu-photo-ba53.jpg"
        className={styles.bodyHeader__img}
        alt="dog"
      />
    </div>
  );
};
