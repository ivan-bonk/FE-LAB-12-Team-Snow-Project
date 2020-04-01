import React from 'react';
import { Link } from 'react-router-dom';
import { Profile } from './profile.component';
import { Rate } from './rate.component';

import '../comparison.scss';

import { PetToCompare } from '../interfaces/pet.interface';

export const ComparisonElement: React.FC<PetToCompare> = props => {
  return (
    <Link className="link-style" to={`/pet/${props.id}`} key={props.id}>
      <li className="item-compare">
        <Profile breed={props.breed} imgUrl={props.imgUrl} />
        {props.type && <Rate rate={props.value} />}
        {!props.type && <span>{props.textValue}</span>}
      </li>
    </Link>
  );
};
