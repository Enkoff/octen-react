import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import styles from './userAlbums.module.css';
import UserAlbum from "../UserAlbum/UserAlbum";
import {albumService} from "../../services/album.service";

const UserAlbums = () => {
    const {id} = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumService.getByUserId(id).then(albums => setAlbums(albums));
    }, [id]);

    return (
        <>
            <div className={styles.userAlbumsContainer}>
                {
                    albums.map(album => <UserAlbum key={album.id} album={album}/>)
                }
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    );
};

export default UserAlbums;