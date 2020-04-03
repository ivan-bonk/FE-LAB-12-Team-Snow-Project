import React from 'react';
import { Link } from 'react-router-dom';
import { Profile } from '../profile/profile.component';
import { Rate } from '../rate/rate.component';
import { ROUTES } from '../../../../shared/constants/routes.constants';

import './comparison-element.scss';

import { PetToCompare } from '../../comparison.interface';

export const ComparisonElement: React.FC<PetToCompare> = props => {
  return (
    <Link className="link-style" to={ROUTES.pet(props.id)} key={props.id}>
      <li className="item-compare">
        <Profile breed={props.breed} imgUrl={props.imgUrl} />
        {props.type && <Rate rate={props.value} />}
        {!props.type && <span>{props.textValue}</span>}
      </li>
    </Link>
  );
};
