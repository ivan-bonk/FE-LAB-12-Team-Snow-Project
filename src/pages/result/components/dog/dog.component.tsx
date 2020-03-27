import React from 'react';
import { DogImages } from '../dog-images/dog-images.component';
import { DogCharacteristic } from '../../../../shared/conponents/dog-characteristic/dog-characteristic.component';
import { DogInfo } from './dog.interfaces';

import './dog.styles.css';

export const Dog: React.FC<DogInfo> = (props): React.ReactElement => {

    return (
        <div className="dog-container">
            <div className="dog-name">
                <h3 className="dog-name-text">{props.name}</h3>
            </div>
            <DogImages />
            <div className="dog-characteristic-container">
                <DogCharacteristic title="Час догляду" value="~1 год/день"/>
                <DogCharacteristic title="Витрати" value="1200 грн/місяць"/>
                <DogCharacteristic title="Розмір" value="середній"/>
            </div>
        </div>
    );
};