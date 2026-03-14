import Link from "next/link"

type Post = {
  _id: string
  title: string
  slug: string
  content: string
  createdAt: string
}

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        <h2>{post.title}</h2>

        <p>
          {post.content.slice(0, 120)}...
        </p>

        <small>
          {new Date(post.createdAt).toLocaleDateString()}
        </small>
      </div>
    </Link>
  )
}