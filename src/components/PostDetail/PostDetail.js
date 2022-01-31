import React, {useEffect, useState} from 'react';
import {NavLink, Outlet, useLocation} from "react-router-dom";

import styles from './postDetail.module.css';
import {postService} from "../../services/post.service";

const PostDetail = () => {
    const {state: {id}} = useLocation();
    const [postDetail, setPostDetail] = useState(null);

    useEffect(() => {
        postService.getById(id).then(post => setPostDetail(post));
    }, [id]);

    return (
        <div>
            {
                postDetail &&
                <div>
                    <div>{`id: ${postDetail.id}`}</div>
                    <div>{`userId: ${postDetail.userId}`}</div>
                    <div>{`title: ${postDetail.title}`}</div>
                    <div>{`body: ${postDetail.body}`}</div>
                    <div className={styles.postDetailLinkContainer}>
                        <NavLink
                            className={styles.postDetailLink}
                            to={`comments`}
                            state={{id: postDetail.id}}>
                            Comments
                        </NavLink>
                    </div>
                </div>
            }
            <hr/>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostDetail;