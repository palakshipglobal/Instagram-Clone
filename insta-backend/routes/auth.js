const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const USER = mongoose.model("USER")
const bcrypt = require("bcrypt")

router.get("/", (req, res) => {
  res.send("Request sent successfully to the server")
})

router.post("/signup", (req, res) => {
  const { name, userName, email, password } = req.body
  if (!name || !email || !userName || !password) {
    return res.status(422).json({ error: "All fields are mandatory." })
  }

  USER.findOne({ $or: [{ email: email }, { userName: userName }] }).then(
    (savedUser) => {
      if (savedUser)
        return res
          .status(422)
          .json({ error: "User already exists with same email or username." })
      bcrypt.hash(password, 12).then((hashedPassword) => {
        const user = new USER({
          name,
          userName,
          email,
          password: hashedPassword,
        })
        user
          .save()
          .then((user) => res.json({ message: "Registered successfully" }))
          .catch((error) => console.log(error))
      })
    }
  )
})

router.post("/signin", (req, res) => {
  const { email, password } = req.body
  if (!email || !password)
    return res.status(422).json({ error: "All fields are mandatory." })

  USER.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) return res.status(422).json({ error: "Invalid email." })
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch)
          return res.status(200).json({ message: "Signed in successfully." })
        else return res.status(422).json({ error: "Password do not match." })
      })
      .catch((error) => console.log(error))
  })
})

module.exports = router
