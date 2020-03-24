import React from 'react';
import './rate.css';

export const Rate = (props: { rate: number}) => {

    let clases: string[] = [];

    switch (props.rate) {
        case 1: {
            clases = ['r', 'gy', 'gy','gy', 'gy']; 
            break;
        }
        case 2: {
            clases = ['y', 'y', 'gy', 'gy', 'gy'];
            break;
        }
        case 3: {
            clases = ['y', 'y', 'y', 'gy', 'gy'];
            break;
        }
        case 4: {
            clases = ['gr', 'gr', 'gr', 'gr', 'gy'];
            break;
        } 
        case 5: {
            clases = ['gr', 'gr', 'gr', 'gr', 'gr'];
            break;
        }
        default: break;
    }

    return (
        <span className="rate-bar">
            <div className={clases[0]}></div>
            <div className={clases[1]}></div>
            <div className={clases[2]}></div>
            <div className={clases[3]}></div>
            <div className={clases[4]}></div>
        </span>
    );
}