const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  photo: { type: String, default: "no photo" },
  postedBy: { type: ObjectId, ref: "USER" },
})

mongoose.model("POST", postSchema)
