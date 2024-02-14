const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/home", (req, res) => {
  res.send("Hello Home!");
});
app.get("/foo", (req, res) => {
  res.send("Hello foo!");
});
app.get("/gerson", (req, res) => {
  res.send("Hello Gerson 👋!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
