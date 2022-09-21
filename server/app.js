const express = require("express");
const app = express();

const cors = require("cors");

app.get("/", (req, res) => {
  return res.json("hi there...");
});

app.listen(4599, () => console.log("listening port no 4599"));
