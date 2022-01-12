import React from 'react';
import Ship from "./Ship";

const Ships = ({data}) => {
    return (
        <div>
            {data.map(item => <Ship item={item}/>)}
        </div>
    );
};

export default Ships;


