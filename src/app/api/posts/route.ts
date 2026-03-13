import { connectDB } from "@/lib/mongodb"
import Post from "@/models/Post"

export async function GET() {
  await connectDB()

  const posts = await Post.find().sort({ createdAt: -1 })

  return Response.json(posts)
}

export async function POST(request: Request) {
  await connectDB()

  const { title, slug, content } = await request.json()

  if (!title || !slug || !content) {
    return Response.json(
      { error: "All fields are required" },
      { status: 400 }
    )
  }

  const post = await Post.create({
    title,
    slug,
    content
  })

  return Response.json(post)
}