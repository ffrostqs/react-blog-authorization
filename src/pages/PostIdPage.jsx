import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
const PostIdPage = () => {

    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data)
    });
    const [fetchComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
        const response = await PostService.getCommentsById(id);
        setComments(response.data)
    });
    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, [])
    return (
        <div>
            <h1>Single Post page ID = {params.id}</h1>
            {isLoading
                ? <Loader />
                : <h3>{post.id}. {post.title}</h3>
            }
            <h1>Comments</h1>
            {isCommentsLoading
                ? <Loader />
                : <div>
                    {comments.map(comments =>
                        <div
                            key={comments.id}
                            style={{ marginTop: 15 }}>
                            <h5>{comments.email}</h5>
                            <div>{comments.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
}
export default PostIdPage;
