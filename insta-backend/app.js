const express = require("express");
const app = express();
const PORT = 5001;
const mongoose = require("mongoose");
const mongoURL = require("./keys");

mongoose.connect(
  "mongodb+srv://palak:Palak28@cluster0.sfyk0ek.mongodb.net/instaDB"
);
mongoose.connection.on("connected", () => {
  console.log("succcess");
});
mongoose.connection.on("error", () => {
  console.log("error");
});

app.listen(PORT, () => console.log("server running"));

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("server created");
//   res.end("working");
// });

// server.listen(5000, "localhost", () => console.log("running"));

//------------------------------------------------------------

// const express = require("express");
// const app = express();
// const PORT = 5001;
// const cors = require("cors"); //3rd party module : no need to add path as it is present in Node modules
// const data = require("./data.js"); //importing our data array that we created to fetch the data

// app.use(cors());
// app.get("/", (req, res) => {
//   res.json(data);
// });

// app.listen(PORT, () => console.log("server running"));
