import React, { useState } from 'react';
import arrowUp from './up-arrow.svg';
import arrowDown from './arrow.svg';
import { AdditionalProps } from './additional.interface';
import styles from './additonalCare-item.module.scss';

export const AdditionalItemCare: React.FC<AdditionalProps> = props => {
  const [open, setOpen] = useState(false);
  const toggleText = () => setOpen(!open);
  const arrowSrc = open ? arrowUp : arrowDown;
  return (
    <div className={styles.additionalSection}>
      <h4 onClick={toggleText} className={styles.addTitle}>
        <img src={arrowSrc} alt="arrow" className={styles.arrow} />
        Догляд за породою
      </h4>
      {open && <p className={styles.plainText}>{props.content}</p>}
    </div>
  );
};
