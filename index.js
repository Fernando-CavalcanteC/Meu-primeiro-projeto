const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  const user = "Fernando";

  res.json({ message: "Hello World!", data: user });
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
app.post("/gerson", (req, res) => {
  console.log("here:", req.body);
  res.send("success");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
