import React from 'react';
import './circles.css';

interface CirclesProps {
  rating: number;
}

export const Circles = (props: CirclesProps): React.ReactElement => {
  const output = [];
  const maxRating = 5;
  const dot: string = props.rating > 3 ? 'green dot' : 'yellow dot';
  for (let i = 0; i < maxRating; i++) {
    output.push(<span className={i <= props.rating ? dot : 'grey dot'} key={i}></span>);
  }
  return <div>{output}</div>;
};
