import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import UserPost from "../UserPost/UserPost";
import {postService} from "../../services/post.service";

const UserPosts = () => {
    const {state:{id}} = useLocation();
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        postService.getByUserId(id).then(userPosts => setUserPosts(userPosts));
    },[id]);

    return (
        <div>
            {
                userPosts.map(userPost => <UserPost key={userPost.id} post={userPost} />)
            }
        </div>
    );
};

export default UserPosts;