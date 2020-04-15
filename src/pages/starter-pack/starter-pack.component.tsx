import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPetProfile } from 'store/pet/actions/pet.actions';
import { StarterProps, RootState } from './starter-pack.interfaces';
import { PetProfile } from 'shared/models';
import { Logo } from 'shared/components/logo/logo.component';
import { LoadingSpinner } from 'shared/components/loading-spinner/loading-spinner';
import { ToBuy } from './components/to-buy/to-buy.component';
import { FromBreeder } from './components/from-breeder/from-breeder.component';
import { AdditionalInfo } from './components/additional-info/additional-info.component';
import { BackBtn } from './components/back-btn/back-btn.component';
import { NamesGenerator } from './components/name-generator/name-generator.component';
import {ErrorHandling} from 'shared/components/error-handling/error-handling.component';
import style from './starter-pack.module.scss';

export const StarterPack: React.FC<StarterProps> = props => {
  const petId: string = props.match.params.id;
  const dispatch = useDispatch();
  const petProfile: PetProfile = useSelector((state: any) => state.pet.currentPet);
  const loading: boolean = useSelector((state: RootState) => state.pet.loading);
  const error: boolean = !!useSelector((state: RootState) => state.pet.errors);
  const { imgUrl, breed, observations, _id } = petProfile;
  const dataReady = !!petProfile._id;

  useEffect(() => {
    if (petId !== _id) {
      dispatch(fetchPetProfile.request(petId));
    }
  }, [petId]);

  return (
    <>
      <div className={style.logoContainer}>
        <Logo />
      </div>
      {loading && <LoadingSpinner />}
      {error && <ErrorHandling/>}
      {dataReady && (
        <div>
          <h1 className={style.pageHeader}>Початковий набір для породи {breed}</h1>
          <img className={style.dogPic} src={imgUrl[0]} alt="Some dog" />
          <div className={style.container}>
            <NamesGenerator />
          </div>
          <ToBuy observations={observations} />
          <FromBreeder />
          <AdditionalInfo />
          <BackBtn id={petId} />
        </div>
      )}
    </>
  );
};
