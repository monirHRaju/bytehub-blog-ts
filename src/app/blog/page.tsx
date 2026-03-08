import React from 'react';
import {blogs} from "@/lib/data"

const BlogPage = () => {
    return (
        <div>
            <h1>All Blogs</h1>
            {
                blogs.map((blog) => (
                    <div key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.author}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default BlogPage;