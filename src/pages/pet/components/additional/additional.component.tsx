import React from 'react';
import { AdditionalProps } from '../../props.models';
import { AdditionalItem } from '../additional-item/additional-item.component';

export const AdditionalComponent: React.FC<AdditionalProps> = props => {
  const { about, specialties, issues } = props.data;
  const blocks = {
    'Про породу': [about],
    'Особливості догляду': specialties,
    'Можливі проблеми': issues,
  };
  const blocksArray = Object.entries(blocks);
  return (
    <div>
      {blocksArray.map((entry, index) => (
        <AdditionalItem title={entry[0]} content={entry[1]} key={index} />
      ))}
    </div>
  );
};
