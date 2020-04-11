import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import style from './add-pet-to-compare.module.scss';
import { addComparisonPet } from 'store/comparison/actions/comparison-handler.action';

import { AddPetToCompareProps } from './add-pet-to-compare.interface';
import { ComparisonState } from './add-pet-to-compare.interface';

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

  return (
    <div className={style.addBlock}>
      {addedToCompare && <span className={style.addBlock__tick}> <span className="material-icons">check</span></span>}
      {!addedToCompare && (
        <span className={style.addBlock__addBtn} onClick={onAddPet}>
          Додати до порівняння
        </span>
      )}
      {addedToCompare && <span className={style.addBlock__addBtn__added}>Доданий до порівняння.</span>}
      {addedToCompare && (
        <Link to={`/comparison/${idsToCompare.join('-')}`} className={style.addBlock__toCompareLink}>
          Перейти
        </Link>
      )}
    </div>
  );
};
