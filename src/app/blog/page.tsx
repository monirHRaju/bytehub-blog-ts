import {blogs} from "@/lib/data"
import Link from 'next/link';

const BlogPage = () => {
    return (
        <div>
            <h1>All Blogs</h1>
            {
                blogs.map((blog) => (
                    <div key={blog.id}>
                        <Link className="text-blue-500" href={`blog/${blog.slug}`}><h2>{blog.title}</h2></Link>
                        <p>{blog.author}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default BlogPage;