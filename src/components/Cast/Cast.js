import React from 'react';

import './cast.css';
import {configThemoviedb} from '../../config';

const Cast = ({cast: {profile_path, name}}) => {
    return (
        <div className={'cast'}>
            <div className={'castImg'} style={{backgroundImage: `url(${configThemoviedb.w500Image(profile_path)})`}}/>
            <p className={'castName'}>{name}</p>
        </div>
    );
};

export default Cast;