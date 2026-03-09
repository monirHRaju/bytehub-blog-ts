import { Blog } from "@/types/blog"

interface Props {
  blog: Blog
}

export default function BlogCard({ blog }: Props) {
  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <p>Author : {blog.author}</p>
    </div>
  )
}