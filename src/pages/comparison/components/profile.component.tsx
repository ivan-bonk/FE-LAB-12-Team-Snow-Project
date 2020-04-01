import React from 'react';

import '../comparison.scss';

import { ProfileInterface } from '../interfaces/pet.interface';

export const Profile: React.FC<ProfileInterface> = props => {
  return (
    <div className="pet-block">
      <img className="pet-image" src={props.imgUrl} alt={props.breed} />
      <span className="pet-name">{props.breed}</span>
    </div>
  );
};
