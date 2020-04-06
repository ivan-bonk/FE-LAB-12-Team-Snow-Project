import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Profile } from '../profile/profile.component';
import { RemoveButtonProps } from './remove-pet-button.interface';
import { removeComparisonPet } from '../../../../store/comparison/actions/comparison-handler.action'

import style from './remove-pet-button.module.scss';

function removeUrl(ids: string, id: string): string {
  const idsArray = ids.split('-');
  const index = idsArray.indexOf(id);
  if (index !== -1) {
    return `/comparison/${[...idsArray.slice(0, index), ...idsArray.slice(index + 1)].join('-')}`;
  }
  return '/comparison/';
}

export const RemovePetButton: React.FC<RemoveButtonProps> = props => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(removeComparisonPet(props.id));
  };

  return (
    <div className={style.removePet}>
      <Profile breed={props.name} imgUrl={props.imgUrl} />
      <Link to={removeUrl(props.ids, props.id)} onClick={onClick} className={style.removePet__link}>
        <div className={style.removePet__link__cross}>&#10006;</div>
      </Link>
    </div>
  );
};
