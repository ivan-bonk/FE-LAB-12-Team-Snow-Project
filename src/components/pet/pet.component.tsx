import React, { useEffect, Fragment } from 'react';

import { ObservationsComponent } from './components/observations/observations.component';
import { AdditionalComponent } from './components/additional/additional.component';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { Logo } from './components/logo/logo.component';
import './pet.css';

interface PetProps {
  match: {
    params: {
      id: number;
    };
  };
}
export const Pet = (props: PetProps): React.ReactElement => {
  const petId: number = props.match.params.id;
  const [imgUrl, setImgUrl] = React.useState<string>('');
  const [breed, setBreed] = React.useState<string>('');
  const [characteristics, setCharacteristics] = React.useState();
  const [observations, setObservations] = React.useState();
  const [additionalInfo, setAdditionalInfo] = React.useState();
  const [loading, setLoading] = React.useState<boolean>(true);

  async function getPet(id: number) {
    const dogProfile = await fetch(`http://localhost:5000/pets/${id}`);
    if (dogProfile.ok) {
      return await dogProfile.json();
    } else {
      return Promise.reject();
    }
  }

  useEffect(() => {
    getPet(petId).then(petProfile => {
      setImgUrl(petProfile.imgUrl);
      setCharacteristics(petProfile.characteristics);
      setObservations(petProfile.observations);
      setAdditionalInfo(petProfile.additionalInfo);
      setBreed(petProfile.breed);
      setLoading(false);
    });
  }, [petId]);

  return (
    <Fragment>
      <Logo />
      {!loading && (
        <div>
          <h1 className="header">{breed}</h1>
          <img src={imgUrl} className="dogPic" alt="Some dog" />
          <div className="container">
            <section>
              <h2>Характеристики</h2>
              <CharacteristicsComponent data={characteristics} />
            </section>

            <section>
              <h2>Спостереження</h2>
              <ObservationsComponent data={observations} />
            </section>

            <section>
              <h2>Додаткова інформація</h2>
              <AdditionalComponent data={additionalInfo} />
            </section>
          </div>
        </div>
      )}
    </Fragment>
  );
};
