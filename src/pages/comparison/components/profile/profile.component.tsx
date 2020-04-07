import React from 'react';

import style from './profile.module.scss';

import { ProfileProps } from './profile.interface';

export const Profile: React.FC<ProfileProps> = props => {
  return (
    <div className={style.petBlock}>
      <img className={style.petBlock__image} src={props.imgUrl} alt={props.breed} />
      <span className={style.petBlock__name}>{props.breed}</span>
    </div>
  );
};
