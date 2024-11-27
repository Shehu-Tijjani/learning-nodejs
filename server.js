const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  // const randNum = _.random(1, 10);
  // console.log(randNum);

  const greet = _.once(() => {
    console.log("Hello");
  });

  greet();
  greet();

  // console.log(req.url, req.method);
  // setHeader
  res.setHeader("Content-Type", "text/html");
  // content to be sent

  //   res.write(`
  //     <h1>Header</h1>
  //     <p>Hello Guys!</p>
  //     `);
  //   // end the response server
  //   res.end();

  //   senting an html file to the client-side (browser)

  //   fs.readFile("./views/index.html", (err, data) => {
  //     // err ? (console.log(err), res.end()) : (res.write(data), res.end());
  //     // short Metod for putting the data as argument if only one data is needed to be sent
  //     err ? (console.log(err), res.end()) : res.end(data);
  //   });

  //   res.write(path);
  //   res.end();

  // sending html files to the client side (browser) and handling wrong requests

  let path = "./views/";

  switch (req.url) {
    case "/":
    case "/home":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-mine":
      res.setHeader("Location", "/about");
      res.statusCode = 301;
      res.end();
      break;
    default:
      path += "404_page.html";
      res.statusCode = 400;
      break;
  }

  fs.readFile(path, (err, data) => {
    err ? (console.log(err), res.end()) : res.end(data);
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listening for Requests on port 3000");
});
