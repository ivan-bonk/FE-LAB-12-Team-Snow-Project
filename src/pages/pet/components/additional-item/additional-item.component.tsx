import React, { useState } from 'react';
import { AdditionalItemProps } from '../../props.models';
import arrowUp from './arrow_up.svg';
import arrowDown from './arrow_down.svg';
import style from './additional-item.module.scss';

export const AdditionalItem: React.FC<AdditionalItemProps> = props => {
  const [open, setOpen] = useState(false);
  const toggleText = () => setOpen(!open);
  const text = props.content.map((item, index) => <li key={index}>{item}</li>);
  const arrowSrc = open ? arrowUp : arrowDown;
  return (
    <article className={style.artcleContainer}>
      <h4 onClick={toggleText} className={style.addTitle}>
        <img src={arrowSrc} alt="arrow" className={style.arrow} />
        <span>{props.title}</span>
      </h4>
      {open && <p className={style.plainText}>{text}</p>}
    </article>
  );
};
