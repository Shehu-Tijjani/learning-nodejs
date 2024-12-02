const express = require("express");
const app = express();
const _ = require("lodash");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

// listening for requests
app.listen("3000");

// connection to mongoDB
const dbURI =
  "mongodb+srv://teejay113:Shehu123@cluster0.vepg0.mongodb.net/nodetjay?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(dbURI);

app.set("view engine", "ejs");

// lIteral Middlewares
// app.use((req, res, next) => {
//   console.log("A new request was made");
//   console.log(`host: ${req.hostname}`);
//   console.log(`path: ${req.path}`);
//   console.log(`method: ${req.method}`);
//   next();
// });

// app.use((req, res, next) => {
//   console.log("In the next middleware");
//   next();
// });

// middlewares and static files
app.use(morgan("dev"));
app.use(express.static("public"));

// mongoose and mongo sandbox routes
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "New Blog",
    snippet: "This is a new Blog",
    body: "This is the content of my new blog",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Mercy finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      title: "Mario has stars",
      snippet: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      title: "Eder finds bones",
      snippet: "Lorem ipsum dolor sit amet consectetur.",
    },
  ];
  //   res.send("<h1>Hello there!</h1>");
  // res.sendFile("./views/index.html", { root: __dirname });

  // with ejs
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  //   res.send("<h1>Hello there!</h1>");
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

// app.get("/about-us", (req, res) => {
//   //   res.send("<h1>Hello there!</h1>");
//   res.redirect("/about");
// });

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create Blog" });
});

app.use((req, res) => {
  // res.status(404).sendFile("./views/404_page.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});
