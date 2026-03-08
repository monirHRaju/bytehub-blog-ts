import { blogs } from "@/lib/data"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function BlogDetails({ params }: Props) {
  const { slug } = await params

  const blog = blogs.find((b) => b.slug === slug)

  if (!blog) {
    return <div>Blog not found</div>
  }

  return (
    <div className="flex justify-between">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p>{blog.author}</p>
    </div>
  )
}