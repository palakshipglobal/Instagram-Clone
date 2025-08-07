const express = require("express")
const mongoose = require("mongoose")
const requireLogin = require("../middlewares/requireLogin")
const router = express.Router()
const POST = mongoose.model("POST")

router.post("/createPost", requireLogin, (req, res) => {
  const { title, body } = req.body
  if (!title || !body)
    return res.status(422).json({ error: "Title and body are required." })
  req.user
  const post = new POST({
    title,
    body,
    photo: req.body.photo || "no photo",
    postedBy: req.user, // Use the user ID from the request object
  })
  post
    .save()
    .then((result) => res.json({ post: result }))
    .catch((err) => console.log(err))
})

module.exports = router
