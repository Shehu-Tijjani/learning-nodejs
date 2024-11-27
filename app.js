const express = require("express");
const app = express();
const _ = require("lodash");

// listening for requests
app.listen("3000");

app.get(("/"), (req, res) => {
  //   res.send("<h1>Hello there!</h1>");
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  //   res.send("<h1>Hello there!</h1>");
  res.sendFile("./views/about.html", { root: __dirname });
});

app.get("/about-us", (req, res) => {
  //   res.send("<h1>Hello there!</h1>");
  res.redirect("/about");
});

app.use((req, res) => {
  res.status(404).sendFile("./views/404_page.html", { root: __dirname });
});
