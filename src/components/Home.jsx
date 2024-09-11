import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useLocation } from 'react-router-dom'
import Post from './Post';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts" + search)
            setPosts(res.data)
            setLoading(false);
        }
        fetchPosts()
    }, [search])
    return (
        <div style={{marginTop: "40px"}}>
            <h1 className='titlehead'>JSON Placeholder Posts</h1>
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                <Post posts={posts} />
            )}
        </div>
    )
}

export default Home
