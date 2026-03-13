async function getPost(slug: string) {
  const res = await fetch(
    `http://localhost:3000/api/posts/${slug}`,
    { cache: "no-store" }
  )

  if (!res.ok) {
    return null
  }

  return res.json()
}

export default async function BlogPostPage({
  params
}: {
  params: { slug: string }
}) {
  const post = await getPost(params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}