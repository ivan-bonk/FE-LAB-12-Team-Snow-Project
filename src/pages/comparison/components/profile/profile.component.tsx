import React from 'react';
import { trimBreed } from '../../utils/trim-breed';
import style from './profile.module.scss';

import { ProfileProps } from './profile.interface';
export const Profile: React.FC<ProfileProps> = props => {
  return (
    <div className={style.petBlock}>
      <img className={style.petBlock__image} src={props.imgUrl} alt={props.breed} />
      <span title={props.breed} className={style.petBlock__name}>
        {trimBreed(props.breed)}
      </span>
    </div>
  );
};
