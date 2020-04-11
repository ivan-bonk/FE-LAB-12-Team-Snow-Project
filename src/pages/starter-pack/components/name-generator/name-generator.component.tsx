import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPetNames, setBoyName, setGirlName } from 'store/name-generator/actions/name-generator.actions';
import { State, PetNames } from './name-generator.interfaces';
import style from './name-generator.module.scss';

export const NamesGenerator: React.FC = () => {
  const [boy, setBoy] = useState<string>('');
  const [girl, setGirl] = useState<string>('');
  const [current, setCurrent] = useState<string>('');

  const dispatch = useDispatch();
  const petNames: PetNames = useSelector((state: State) => state.nameGenerator.petNames);
  const boyId: number = useSelector((state: State) => state.nameGenerator.boyId);
  const girlId: number = useSelector((state: State) => state.nameGenerator.girlId);
  const petName: string = current === 'boy' ? boy : girl;
  const showPetName = !!petName;
  const boyBtnStyle = current === 'boy' ? style.generator__button_activeBlue : style.generator__button_blue;
  const girlBtnStyle = current === 'girl' ? style.generator__button_activePink : style.generator__button_pink;

  const handleBoys = () => {
    setBoy(petNames.boys[boyId]);
    dispatch(setBoyName);
    setCurrent('boy');
  };
  const handleGirls = () => {
    setGirl(petNames.girls[girlId]);
    dispatch(setGirlName);
    setCurrent('girl');
  };

  useEffect(() => {
    if (!!petNames) {
      dispatch(fetchPetNames.request());
    }
  }, []);

  return (
    <Fragment>
      {showPetName && <h3 className={style.generator__name}>{petName}</h3>}
      <div className={style.generator__switch}>
        <span className={style.generator__header}>Ідея клички</span>
        <button onClick={handleBoys} className={boyBtnStyle}>
          Boy
        </button>
        <button onClick={handleGirls} className={girlBtnStyle}>
          Girl
        </button>
      </div>
    </Fragment>
  );
};
