import React from 'react';
import style from './rating.module.scss';
import { RatingProps } from '../../props.models';

export const Rating: React.FC<RatingProps> = props => {
  const output = [];
  const maxRating = 5;
  const averageRating = 3;
  const dotColor: string = props.rating > averageRating ? style.green : style.yellow;
  for (let i = 1; i <= maxRating; i++) {
    output.push(<span className={i <= props.rating ? dotColor : style.grey} key={i}></span>);
  }
  return <div className={style.ratingContainer}>{output}</div>;
};
