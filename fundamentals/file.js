const fs = require("fs");

// Read a content of a file
// fs.readFile("./test.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(`data: ${data.toString()}`);
// });

// replace the content of or create a file
// fs.writeFile("./test2.txt", "this is now an experiment", () => {
//   console.log("File written successsfully");
// });

// Create a folder
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) console.log(err);
//   });
// } else {
// delete a folder
//   fs.rmdir("./assets", (err) => (err ? console.log(err) : null));
// }

// delete a file
if (fs.existsSync("./docs/text.txt")) {
  fs.unlink("./docs/text.txt", () => {});
}
