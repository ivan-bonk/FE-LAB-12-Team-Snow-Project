import React from 'react';

import dandruf from './dandruf.image.svg';

import './dog-search.styles.css';

export const DogSearch: React.FC = (): React.ReactElement => {

    return (
        <div className="search-container">
            <h2 className="searh-header">Знайти</h2>
            <input type="text" className="search-input" placeholder="Мопс..."/>
        </div>
    )
}