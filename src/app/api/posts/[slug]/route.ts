import { connectDB } from "@/lib/mongodb"
import Post from "@/models/Post"

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  await connectDB()

  const { slug } = await params
  console.log("Slug:", slug)
 
const post = await Post.findOne({ slug })

  if (!post) {
    return Response.json(
      { error: "Post not found" },
      { status: 404 }
    )
  }

  return Response.json(post)
}