import React, { useState } from 'react';
import arrowUp from './up-arrow.svg';
import arrowDown from './arrow.svg';
import { AdditionalProps } from './additional.interface';
import styles from './additonal-item.module.scss';

export const AdditionalItemCare: React.FC<Partial<AdditionalProps>> = props => {
  const [open, setOpen] = useState(false);
  const toggleText = () => setOpen(!open);
  const arrowSrc = open ? arrowUp : arrowDown;

  return (
    <div className={styles.additional}>
      <h4 onClick={toggleText} className={styles.additional__title}>
        <img src={arrowSrc} alt="arrow" className={styles.arrow} />
        Догляд за породою
      </h4>
      {open && <p className={styles.plainText}>{props.content}</p>}
    </div>
  );
};
