import prisma from "@/lib/prisma"

export async function GET() {
  return Response.json({
    message: "API working"
  })
}
// export async function GET() {
//   const posts = await prisma.post.findMany()

//   return Response.json(posts)
// }

export async function POST() {
  const post = await prisma.post.create({
    data: {
      title: "My First Blog",
      slug: "my-first-blog",
      content: "This is my first blog post"
    }
  })

  return Response.json(post)
}