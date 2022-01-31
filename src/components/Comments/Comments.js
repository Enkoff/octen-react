import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import Comment from "../Comment/Comment";
import {commentService} from "../../services/comment.service";

const Comments = () => {
    const {state: {id}} = useLocation();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getById(id).then(comments => setComments(comments));
    },[id]);

    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment} />)
            }
        </div>
    );
};

export default Comments;