import BlogCard from "@/componets/BlogCard";
import {blogs} from "@/lib/data"
import Link from 'next/link';

const BlogPage = () => {
    return (
        <div>
            <h1>All Blogs</h1>
            <div className="grid grid-cols-3 gap-7">
                {
                blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))
            }
            </div>
        </div>
    );
};

export default BlogPage;