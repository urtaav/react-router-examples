import React from 'react'
import { Outlet} from 'react-router-dom';

const Posts = () => {
    return (
        <div style={{ padding: 20 }}>
            <h2>Blog</h2>
            <Outlet></Outlet>
        </div>
    )
}

export default Posts
