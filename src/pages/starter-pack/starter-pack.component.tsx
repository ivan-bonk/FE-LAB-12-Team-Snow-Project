import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPetProfile, clearPetProfile } from 'store/pet/actions/pet.actions';
import { StarterProps, RootState } from './starter-pack.interfaces';
import { PetProfile } from 'shared/models';

import { LoadingSpinner } from 'shared/components/loading-spinner/loading-spinner';
import { ToBuy } from './components/to-buy/to-buy.component';
import { FromBreeder } from './components/from-breeder/from-breeder.component';
import { AdditionalInfo } from './components/additional-info/additional-info.component';
import { BackBtn } from './components/back-btn/back-btn.component';
import { NamesGenerator } from './components/name-generator/name-generator.component';
import { ErrorHandling } from 'shared/components/error-handling/error-handling.component';
import {DogPicture} from 'shared/components/dog-picture/dog-picture.component';

import style from './starter-pack.module.scss';

export const StarterPack: React.FC<StarterProps> = props => {
  const petId: string = props.match.params.id;
  const dispatch = useDispatch();
  const petProfile: PetProfile = useSelector((state: RootState) => state.pet.currentPet);
  const loading: boolean = useSelector((state: RootState) => state.pet.loading);
  const error = !!useSelector((state: RootState) => state.pet.errors);
  const { imgUrl, breed, observations } = petProfile;
  const dataReady = !!petProfile._id;

  useEffect(() => {
    dispatch(fetchPetProfile.request(petId));
    return () => {
      dispatch(clearPetProfile);
    };
  }, []);

  return (
    <>
      {loading && <LoadingSpinner />}
      {error && <ErrorHandling />}
      {dataReady && (
        <div>
          <h1 className={style.pageHeader}>Початковий набір для породи {breed}</h1>
          <div className={style.responsiveContainer}>
            <DogPicture images={imgUrl}/>
            <div className={style.generatorContainer}>
              <NamesGenerator />
            </div>
            <div className={style.responsiveItem}>
              <ToBuy observations={observations} />
              <FromBreeder />
            </div>
          </div>
          <AdditionalInfo />
          <BackBtn id={petId} />
        </div>
      )}
    </>
  );
};
