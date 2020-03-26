import React from 'react';
import { AdditionalInfo } from '../../pet.models';
import { AdditionalItem } from '../additional-item/additional.item';

interface AdditionalProps {
  data: AdditionalInfo;
}

export const AdditionalComponent = (props: AdditionalProps): React.ReactElement => {
  const { about, specialties, issues } = props.data;
  return (
    <div>
      <AdditionalItem content={about} title="Про породу" />
      <AdditionalItem content={specialties} title="Особливості догляду" />
      <AdditionalItem content={issues} title="Можливі проблеми" />
    </div>
  );
};
