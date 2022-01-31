import React from 'react';
import {NavLink} from "react-router-dom";

import styles from "./post.module.css";

const Post = ({post: {body, id}}) => {
    return (
        <div className={styles.postContainer}>
            {`${id}) ${body})`}
            <NavLink className={styles.postLink} to={`${id.toString()}`} state={{id}}>PostDetail</NavLink>
        </div>
    );
};

export default Post;