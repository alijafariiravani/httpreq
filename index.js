import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Ali Jafari</p><p>I am trying to learn web design</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +989383351398</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
