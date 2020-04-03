import React from 'react';
import { ComparisonElement } from '../comparison-element/comparison-element.component';
import '../../comparison.scss';
import { PetToCompare } from '../../comparison.interface';
import { CharacteristicProps } from './characteristics.interface';

export const Characteristics: React.FC<CharacteristicProps> = props => {
  const items = props.data.pets.map((pet: PetToCompare) => {
    return (
      <ComparisonElement
        key={pet.id}
        id={pet.id}
        breed={pet.breed}
        imgUrl={pet.imgUrl}
        type={pet.type}
        textValue={pet.textValue}
        value={pet.value}
      />
    );
  });

  return <ul>{items}</ul>;
};
