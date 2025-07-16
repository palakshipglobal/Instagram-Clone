const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const USER = mongoose.model("USER");

router.get("/", (req, res) => {
  res.send("hey");
});

router.post("/signup", (req, res) => {
  const { name, userName, email, password } = req.body;
  if (!name || !email || !userName || !password) {
    res.status(422).json({ error: "All fields are mandatory." });
  }

  USER.findOne({ $or: [{ email: email }, { userName: userName }] }).then(
    (savedUser) => {
      if (savedUser)
        return res
          .status(422)
          .json({ error: "User already exists with same email or username." });
      const user = new USER({
        name,
        userName,
        email,
        password,
      });
      user
        .save()
        .then((user) => res.json({ message: "saved successfully" }))
        .catch((error) => console.log(error));
    }
  );
});

module.exports = router;
