import BlogCard from "@/components/BlogCard"


async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store"
  })

  return res.json()
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "auto",
        padding: "40px"
      }}
    >
      <h1>Blog</h1>

      <div
        style={{
          display: "grid",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        {posts.map((post: any) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  )
}