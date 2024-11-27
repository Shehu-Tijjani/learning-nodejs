const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog.txt", {
  encoding: "utf-8",
});

if (fs.existsSync("./docs/blog2.txt")) {
  fs.unlink("./docs/blog2.txt", () => {});
}

const writeStream = fs.createWriteStream("./docs/blog2.txt", {
  encoding: "utf-8",
});

// STREAMING

// readStream.on("data", (databits) => {
//   console.log(`"

//     ------- bit arrived-------"

//     `);
//   console.log(databits);
//   writeStream.write("\n NEW LINE \n");
//   writeStream.write(databits);
// });

// PIPING

readStream.pipe(writeStream);
