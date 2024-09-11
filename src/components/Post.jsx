import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ posts }) => {
    return (
        <div className='posts'>
            {posts && posts.map(p => (
                <Link to={`/post/${p.id}`} className='post' onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}>
                    <h1><span style={{ fontWeight: "bolder" }}>Title: </span>{p.title}</h1>
                    <h3><span style={{ fontWeight: "bolder" }}>Desc: </span>{p.body}</h3>
                </Link>
            ))}
        </div>
    )
}

export default Post
