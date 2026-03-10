import { Blog } from "@/types/blog";
import Link from "next/link";

interface Props {
  blog: Blog
}

export default function BlogCard ({blog}: Props) {

  return (

      <Link className="cursor-pointer felx flex-col border border-gray-800 bg-amber-50 p-4" href={`blog/${blog.slug}`}>
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
        <p>{blog.author}</p>
      </Link>

  )
} 