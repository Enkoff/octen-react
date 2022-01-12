import React from 'react';
import './shipsList.css'

const ShipsList = ({data}) => {
    return (
        <div>
            {data.map(item => {
                return (
                    <div className='wrapper'>
                        <div className='text__wrapper'>
                            <h1>{item.mission_name}</h1>
                            <span>{item.launch_year}</span>
                        </div>
                        <div>
                            <img src={`${item.links.mission_patch}`} width='100px' height='100px' alt={'ships=logo'}/>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ShipsList;


