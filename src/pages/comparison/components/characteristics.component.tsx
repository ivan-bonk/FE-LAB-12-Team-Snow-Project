import React from 'react';
import { Link } from'react-router-dom';
import { Rate } from './rate.component';

import '../comparison.css';

import { Pet } from '../interfaces/pet.interface';


export const Characteristics = (
    props: {
        pets: Array<Pet>
        display: string,
        rate: boolean
    }) => {

    const {pets, display, rate} = props

    const items = pets.map((el: Pet) => {
        const property = Object.getOwnPropertyDescriptor(el, display);

        const show = rate ? 
            <Rate rate={property?.value} /> :
            <span>{property?.value}</span>;

        const styles = {
            color: 'black',
            textDecoration: 'none'
        }

        return (
        <Link style={styles} to={`/pet/${el.id}`} key={el.id}>
            <li className='item-compare'>
                <div className='pet-block'>
                    <img className='pet-image' src={el.imgUrl} alt={el.alias} />
                    <span className="pet-name">{el.alias}</span>
                </div>
                {show}
            </li>
        </Link>
    )});

    return (
        <ul>
            {items}
        </ul>
    )
} 