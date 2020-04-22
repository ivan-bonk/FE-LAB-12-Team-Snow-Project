import React, { useState, useLayoutEffect } from 'react';
import { AdditionalProps } from './additional.interface';
import styles from './additonal-item.module.scss';

export const AdditionalItemCare: React.FC<Partial<AdditionalProps>> = props => {
  const [open, setOpen] = useState(false);
  const toggleText = () => (window.innerWidth < 576 ? setOpen(!open) : null);
  const arrowType = open ? 'expand_less' : 'expand_more';

  useLayoutEffect(() => {
    const openAdditional = () => {
      window.innerWidth > 576 ? setOpen(true) : setOpen(false);
    };

    window.innerWidth > 576 ? setOpen(true) : setOpen(false);
    window.addEventListener('resize', openAdditional);

    return () => window.removeEventListener('resize', openAdditional);
  }, []);

  return (
    <div className={styles.additional}>
      <h4 onClick={toggleText} className={styles.additional__title}>
        <span className={styles.arrow}>
          <span className="material-icons">{arrowType}</span>
        </span>
        Догляд за породою
      </h4>
      {open && <p className={styles.plainText}>{props.content}</p>}
    </div>
  );
};
