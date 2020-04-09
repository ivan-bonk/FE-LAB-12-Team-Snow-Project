import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetPetsById, clearListToCompare } from 'store/comparison/actions/comparison.action';

import { ComparisonDisplay } from './components/comparison-display/comparison-display.component';
import { Empty } from './components/empty/empty.component';

import style from './comparison.module.scss';

import { Logo } from 'shared/logo/logo.component';

import { ComparisonProps, PetsToCompareList, RootState } from './comparison.interface';

export const Comparison: React.FC<ComparisonProps> = props => {
  const ids = props.match.params[0];

  const dispatch = useDispatch();

  const pets: PetsToCompareList[] = useSelector((state: RootState) => state.comparison.petsToCompare);

  useEffect(() => {
    if (ids) {
      dispatch(GetPetsById.request(ids.split('-')));
    } else {
      dispatch(clearListToCompare());
    }
  }, [ids]);

  // Todo: Add cool animated loader component @ Bonk I.
  const loading = pets.length > 0 ? null : <div>Собачки завантажуються...</div>;

  const isEmpty = ids ? loading : <Empty />;

  return (
    <div className={style.comparisonPage}>
      <Logo />
      <h1 className={style.comparisonPage__header}>Порівняння</h1>
      {isEmpty}
      {pets.length > 0 && <ComparisonDisplay ids={ids} pets={pets} />}
    </div>
  );
};
