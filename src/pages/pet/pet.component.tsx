import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPetProfile } from 'store/pet/actions/pet.actions';
import { PetProps, RootState } from './props.models';
import { ObservationsComponent } from './components/observations/observations.component';
import { AdditionalInfoComponent } from './components/additional-info/additional-info.component';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { PetProfile } from 'shared/models';
import { Logo } from 'shared/logo/logo.component';
import style from './pet.module.scss';
import { AddPetToCompare } from 'shared/components/add-pet-to-compare/add-pet-to-compare.component';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/constants/routes.constants';

export const Pet: React.FC<PetProps> = props => {
  const petId: string = props.match.params.id;
  const dispatch = useDispatch();
  const petProfile: PetProfile = useSelector((state: RootState) => state.pet.currentPet);
  const error: string | undefined = useSelector((state: RootState) => state.pet.errors);
  const { imgUrl, breed, characteristics, observations, additionalInfo, _id } = petProfile;
  const dataReady = !!Object.keys(petProfile).length;

  useEffect(() => {
    dispatch(fetchPetProfile.request(petId));
  }, [petId]);

  if(error){
    return (
      <Fragment>
        <Logo />
        <div className={style.container}>
              <h2 className={style.sectionHeader}>Упс, щось пішло не так</h2>
        </div>
      </Fragment>
    )
  }
  //TODO: Skeleton or placeholder. Add during loading the page @O.Khabrovska
  return (
    <Fragment>
       <div className={style.logoContainer}><Logo /></div>    
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
            <Link to={ROUTES.starterPack.route(_id)} className={style.starterBtn}>
            <span className="material-icons">flag</span>
            {/* //TODO: Remove this silly joke and come up with the better idea for this text @O.Khabrovska */}
            <span className={style.starterBtnText}>Потрібен стартовий пакет ?</span> 
            </Link>
          </div>
        </div>
      )}  
    </Fragment>
  );
};
