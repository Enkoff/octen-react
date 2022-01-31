import React from 'react';

import styles from './photo.module.css';

const Photo = ({photo: {id, albumId, title, url}}) => {
    return (
        <div className={styles.photoContainer}>
            <div>
                <div>{`id: ${id}`}</div>
                <div>{`albumId: ${albumId}`}</div>
                <div>{`title: ${title}`}</div>
            </div>
            <div className={styles.imgContainer}>
                <img src={url} alt={`${title}`}/>
            </div>
        </div>
    );
};

export default Photo;