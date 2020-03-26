import React, { useState } from 'react';
import arrowUp from './arrow_up.svg';
import arrowDown from './arrow_down.svg';
import './additional.item.css';

interface CareItem {
  name: string;
  description: boolean;
}

interface AdditionaItemProps {
  title: string;
  content: string;
}

export const AdditionalItem = (props: AdditionaItemProps): React.ReactElement => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <article>
      <h4 onClick={toggle} className="add-title">
        <img src={open ? arrowUp : arrowDown} alt="arrow" /> <span>{props.title}</span>
      </h4>
      {open && <p className="plain-text">{props.content}</p>}
    </article>
  );
};
