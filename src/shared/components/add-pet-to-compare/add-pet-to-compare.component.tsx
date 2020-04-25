import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import style from './add-pet-to-compare.module.scss';
import { addComparisonPet, removeComparisonPet } from 'store/comparison/actions/comparison-handler.action';

import { AddPetToCompareProps } from './add-pet-to-compare.interface';
import { ComparisonState } from './add-pet-to-compare.interface';
import { ROUTES } from 'shared/constants/routes.constants';

import { Tooltip, Zoom } from '@material-ui/core';

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
    <div>
      {!addedToCompare && (
        <div className={style.addPet}>
          <div className={style.addPet__addBtn} onClick={onAddPet}>
            Додати до порівняння
          </div>
        </div>
      )}
      {addedToCompare && (
        <div className={style.addBlock}>
          <Tooltip TransitionComponent={Zoom} title="Собаку додано до порівняння" arrow>
            <div className={style.addBlock__element}>
              <span className={`material-icons ${style.addBlock__element__tick}`}>check</span>
              <span className={style.addBlock__element__added}>Додано</span>
            </div>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="Перейти до порівняння собак" arrow>
            <div className={style.addBlock__element}>
              <span className={`material-icons ${style.addBlock__element__thumbs}`}>thumbs_up_down</span>
              <Link
                to={`${ROUTES.comparison}${idsToCompare.join('-')}`}
                className={style.addBlock__element__toCompareLink}
              >
                Перейти
              </Link>
            </div>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="Видалити собаку зі списку порівняння" arrow>
            <div className={style.addBlock__element}>
              <span className={`material-icons ${style.addBlock__element__clear}`}>clear</span>
              <span className={style.addBlock__element__removePetBtn} onClick={onRemovePet}>
                Видалити
              </span>
            </div>
          </Tooltip>
        </div>
      )}
    </div>
  );
};
