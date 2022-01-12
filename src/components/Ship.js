import React from 'react';
import './shipsList.css'

const Ship = ({item: {mission_name, launch_year, links: {mission_patch}}}) => {
    return (
        <div className='wrapper'>
            <div className='text__wrapper'>
                <h1>{mission_name}</h1>
                <span>{launch_year}</span>
            </div>
            <div>
                <img className='ship__img' src={`${mission_patch}`} alt={'ships=logo'}/>
            </div>
        </div>
    );
};

export default Ship;


