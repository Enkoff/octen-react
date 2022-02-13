import React from 'react';

import './catalogHeade.css';
import {background} from '../../assets';

const CatalogHeader = ({children}) => {
    return (
        <div className={'catalogHeader'} style={{backgroundImage: `url(${background})`}}>
            <h2>{children}</h2>
        </div>
    );
};

export default CatalogHeader;