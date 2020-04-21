import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import style from './add-pet-to-compare.module.scss';
import { addComparisonPet, removeComparisonPet } from 'store/comparison/actions/comparison-handler.action';

import { AddPetToCompareProps } from './add-pet-to-compare.interface';
import { ComparisonState } from './add-pet-to-compare.interface';
import { ROUTES } from 'shared/constants/routes.constants'; 

export const AddPetToCompare: React.FC<AddPetToCompareProps> = props => {
  const dispatch = useDispatch();

  const idsToCompare: string[] = useSelector((state: ComparisonState) => state.comparisonHandler.idsToCompare);

  const hasId = () => {
    return idsToCompare.indexOf(props.id) !== -1 ? true : false;
  };
  let addedToCompare: boolean = hasId();

  useEffect(() => {
    addedToCompare = hasId();
  }, [idsToCompare]);

  const onAddPet = () => {
    dispatch(addComparisonPet(props.id));
  };

  const onRemovePet = () => {
    dispatch(removeComparisonPet(props.id));
  };

  return (
    <div className={style.addBlock}>
      {!addedToCompare && (
        <div className={style.addBlock__addBtn} onClick={onAddPet}>
          Додати до порівняння
        </div>
      )}
      {addedToCompare && (
        <>
          <div className={style.addBlock__element}>
            <span className={`material-icons ${style.addBlock__element__tick}`}>check</span>
            <span className={style.addBlock__element__added}>Додано</span>
          </div>
          <div className={style.addBlock__element}>
            <span className={`material-icons ${style.addBlock__element__thumbs}`}>thumbs_up_down</span>
            <Link to={`${ROUTES.comparison}${idsToCompare.join('-')}`} className={style.addBlock__element__toCompareLink}>
              Перейти
            </Link>
          </div>
          <div className={style.addBlock__element}>
            <span className={`material-icons ${style.addBlock__element__clear}`}>clear</span>
            <span className={style.addBlock__element__removePetBtn} onClick={onRemovePet}>
              Видалити
            </span>
          </div>
        </>
      )}
    </div>
  );
};
