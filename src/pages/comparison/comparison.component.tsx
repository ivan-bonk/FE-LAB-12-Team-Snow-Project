import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetPetsById, clearListToCompare } from 'store/comparison/actions/comparison.action';
import { addComparisonPet } from 'store/comparison/actions/comparison-handler.action';
import { ComparisonDisplay } from './components/comparison-display/comparison-display.component';
import { Empty } from './components/empty/empty.component';
import { LoadingSpinner } from 'shared/components/loading-spinner/loading-spinner';
import { ErrorHandling } from 'shared/components/error-handling/error-handling.component';
import style from './comparison.module.scss';

import { PetsToCompareList, RootState } from './comparison.interface';
import { ComparisonState } from 'shared/components/add-pet-to-compare/add-pet-to-compare.interface';

export const Comparison: React.FC = () => {
  // Route to comparison page don't use any params
  // I don't know how i can open 'Empty' page while path is /comparison/ using router params
  // and if path is /comparison/id1-id20-id3    -  open another page
  const ids = window.location.pathname.split('/')[2];

  const dispatch = useDispatch();

  const pets: PetsToCompareList[] = useSelector((state: RootState) => state.comparison.petsToCompare);
  const isLoading: boolean = useSelector((state: RootState) => state.comparison.loading);
  const isError = !!useSelector((state: RootState) => state.comparison.error);
  const idsToCompare: string[] = useSelector((state: ComparisonState) => state.comparisonHandler.idsToCompare);

  useEffect(() => {
    if (ids) {
      ids.split('-').forEach((el, index) => {
        if (el !== idsToCompare[index]) {
          dispatch(addComparisonPet(el));
        }
      });
      dispatch(GetPetsById.request(ids.split('-')));
    } else {
      dispatch(clearListToCompare());
    }
  }, [ids]);

  const loading = isLoading ? <LoadingSpinner /> : null;

  const isEmpty = ids ? loading : <Empty />;

  return (
    <div className={style.comparisonPage}>
      {isError ? (
        <ErrorHandling />
      ) : (
        <div className={style.comparisonPage__content}>
          <h1 className={style.comparisonPage__header}>Порівняння</h1>
          {isEmpty}
          {pets.length > 0 && <ComparisonDisplay ids={ids} pets={pets} />}
        </div>
      )}
    </div>
  );
};
