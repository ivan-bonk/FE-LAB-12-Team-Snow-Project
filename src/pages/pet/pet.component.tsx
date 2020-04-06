import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPetProfile } from '../../store/pet/actions/pet.actions';
import { PetProps, RootState } from './props.models';
import { ObservationsComponent } from './components/observations/observations.component';
import { AdditionalInfoComponent } from './components/additional-info/additional-info.component';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { PetProfile } from '../../shared/models';
import { Logo } from './components/logo/logo.component';
import { BackBtn } from './components/back-btn/back-btn.component';
import style from './pet.module.scss';
import { AddPetToCompare } from '../../shared/components/add-pet-to-compare/add-pet-to-compare.component';

export const Pet: React.FC<PetProps> = props => {
  const petId: number = props.match.params.id;
  const dispatch = useDispatch();
  const petProfile: PetProfile = useSelector((state: RootState) => state.pet.currentPet);
  const { imgUrl, breed, characteristics, observations, additionalInfo, _id } = petProfile;
  const dataReady = !!Object.keys(petProfile).length;

  useEffect(() => {
    dispatch(fetchPetProfile.request(petId));
  }, []);

  //TODO: Skeleton or placeholder. Add during loading the page @O.Khabrovska
  return (
    <Fragment>
      <Logo />
      {dataReady && (
        <div>
          <h1 className={style.pageHeader}>{breed}</h1>
          <img className={style.dogPic} src={imgUrl[0]} alt="Some dog" />
          <AddPetToCompare id={_id}/>
          <div className={style.container}>
            <section>
              <h2 className={style.sectionHeader}>Характеристики</h2>
              <CharacteristicsComponent data={characteristics} />
            </section>
            <section>
              <h2 className={style.sectionHeader}>Спостереження</h2>
              <ObservationsComponent data={observations} />
            </section>
            <section>
              <h2 className={style.sectionHeader}>Додаткова інформація</h2>
              <AdditionalInfoComponent data={additionalInfo} />
            </section>
          </div>
        </div>
      )}
      <BackBtn />
    </Fragment>
  );
};
