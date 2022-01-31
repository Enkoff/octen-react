import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import styles from './photos.module.css';
import Photo from "../Photo/Photo";
import {albumService} from "../../services/album.service";

const Photos = () => {
    const {state: {id}} = useLocation();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        albumService.getById(id).then(photos => setPhotos(photos));
    },[id])

    return (
        <div className={styles.photosContainer}>
            {
                photos.map(photo => <Photo key={photo.id} photo={photo}/>)
            }
        </div>
    );
};

export default Photos;