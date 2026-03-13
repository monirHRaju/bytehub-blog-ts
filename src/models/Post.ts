import mongoose, { Schema, Document } from "mongoose"

export interface IPost extends Document {
  title: string
  slug: string
  content: string
  createdAt: Date
}

const PostSchema = new Schema<IPost>({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.models.Post ||
  mongoose.model<IPost>("Post", PostSchema)