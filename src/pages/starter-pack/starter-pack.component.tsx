import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPetProfile } from 'store/pet/actions/pet.actions';
import {StarterProps} from './starter-pack.interfaces';
import {PetProfile} from 'shared/models';
import { Logo } from 'shared/logo/logo.component';
import style from './starter-pack.module.scss';


export const StarterPack: React.FC<StarterProps> = (props) => {
  const petId: string = props.match.params.id;
  const dispatch = useDispatch();
  const petProfile: PetProfile = useSelector((state: any) => state.pet.currentPet);
  const { imgUrl, breed, observations, _id } = petProfile;
  const dataReady = !!petProfile._id;

  useEffect(() => {
    if(petId !== _id){
      dispatch(fetchPetProfile.request(petId));
    }  
  }, [petId]);

  return (
<Fragment>
       <div className={style.logoContainer}><Logo /></div>
       {dataReady && (
        <div>
        {/* //TODO: Remove this silly joke and come up with the better idea for this text @O.Khabrovska */}
        <h1 className={style.pageHeader}>
          Стартовий пакет для породи {breed}
        </h1>
        <img className={style.dogPic} src={imgUrl[0]} alt="Some dog" />
      </div>
       )}  
    </Fragment>
  );
};
