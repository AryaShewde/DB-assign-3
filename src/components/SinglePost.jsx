import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const SinglePost = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts/" + path);
            setPost(res.data)
        }
        const getComment = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts/" + path + "/comments");
            setComments(res.data)
        }
        getComment();
        getPost();
    }, [path])
    return (
        <div className='singlepost'>
            <h1><span style={{ fontWeight: "bolder" }}>Title: </span>{post.title}</h1>
            <h3><span style={{ fontWeight: "bolder" }}>Desc: </span>{post.body}</h3>
            <h1>Comments</h1>
            <div className='comments'>
                {comments && comments.map(c => (
                    <div key={c.id} className='comment'>
                        <h4><span style={{ fontWeight: "bolder" }}>Name: </span>{c.name}</h4>
                        <h4><span style={{ fontWeight: "bolder" }}>Email: </span>{c.email}</h4>
                        <h4><span style={{ fontWeight: "bolder" }}>Body: </span>{c.body}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SinglePost
