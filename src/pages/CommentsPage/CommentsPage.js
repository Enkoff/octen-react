import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getAllCommentsThunk} from '../../store';
import {Comment} from '../../components';

const CommentsPage = () => {
    const {comments} = useSelector(state => state['comment']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCommentsThunk());
    }, [dispatch]);

    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {CommentsPage};