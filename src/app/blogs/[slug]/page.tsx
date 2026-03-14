async function getPost(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${slug}`, {
  cache: "no-store"
})
console.log(res)
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
  console.log(params.slug)
  const post = await getPost(params.slug)

  console.log("Slug from page:", params.slug)
  
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