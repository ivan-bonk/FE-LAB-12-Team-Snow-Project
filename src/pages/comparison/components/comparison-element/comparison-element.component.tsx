import React from 'react';
import { Link } from 'react-router-dom';
import { Profile } from '../profile/profile.component';
import { Rating } from 'shared/components/rating/rating.component';
import { ROUTES } from 'shared/constants/routes.constants';

import style from './comparison-element.module.scss';

import { PetToCompare } from '../../comparison.interface';

export const ComparisonElement: React.FC<PetToCompare> = props => {
  return (
    <Link className={style.linkStyle} to={ROUTES.pet.route(props.id)} key={props.id}>
      <li className={style.itemCompare}>
        <Profile breed={props.breed} imgUrl={props.imgUrl} />
        {props.type && <Rating rating={props.value} />}
        {!props.type && <span>{props.textValue}</span>}
      </li>
    </Link>
  );
};
