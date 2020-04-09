import React, { useState } from 'react';
import { AdditionalItemProps } from '../../props.models';
import style from './additional-item.module.scss';

export const AdditionalItem: React.FC<AdditionalItemProps> = props => {
  const [open, setOpen] = useState(false);
  const toggleText = () => setOpen(!open);
  const textItemStyle = props.title === "Можливі проблеми" ? style.listItem : style.textItem;
  const text = props.content.map((item, index) => <li key={index} className={textItemStyle}>{item}</li>);
  const arrowType = open ? "expand_less" : "expand_more";
  return (
    <article className={style.artcleContainer}>
      <h4 onClick={toggleText} className={style.addTitle}>
        <span className={style.arrow}><span className="material-icons">{arrowType}</span></span>
        <span>{props.title}</span>
      </h4>
      {open && <p className={style.plainText}>{text}</p>}
    </article>
  );
};
