import React from 'react';
import { trimBreed } from '../../utils/trim-breed';
import { Tooltip, Zoom } from '@material-ui/core';

import style from './profile.module.scss';

import { ProfileProps } from './profile.interface';
export const Profile: React.FC<ProfileProps> = props => {
  return (
    <Tooltip TransitionComponent={Zoom} title={props.breed} arrow>
      <div className={style.petBlock}>
        <img className={style.petBlock__image} src={props.imgUrl} alt={props.breed} />
        <span className={style.petBlock__name}>{trimBreed(props.breed)}</span>
      </div>
    </Tooltip>
  );
};
