import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  image: { type: String, required: true },
  like: { type: Number },
  date: { type: Date, default: Date.now },
  posts: { type: String },
}
);
const Posts = mongoose.models.Post || mongoose.model("Post", postSchema);

export { Posts };
