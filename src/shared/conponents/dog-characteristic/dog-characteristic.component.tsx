import React from 'react';

import './dog-characteristic.styles.css';

interface DogCharacteristic {
    title: string;
    value: string;
}

export const DogCharacteristic: React.FC<DogCharacteristic> = (props): React.ReactElement => {
    return (
        <div className="characteristic-container">
            <p className="characteristic-title">{props.title}</p>
            <p className="characteristic-value">{props.value}</p>
        </div>
    );
};