import React, {useEffect, useState} from 'react';

import './casts.css';
import {themoviedbService} from '../../services';
import {useParams} from 'react-router';
import {Cast} from '../index';

const Casts = () => {
    const {category, id} = useParams();
    const [credits, setCredits] = useState([]);

    useEffect(() => {
        themoviedbService.getCredits(category, id).then(res => setCredits(res['cast'].slice(0, 5)));
    }, [category, id]);

    return (
        <div className={'casts'}>
            {credits.map((cast, index) => <Cast key={index} cast={cast}/>)}
        </div>
    );
};

export default Casts;