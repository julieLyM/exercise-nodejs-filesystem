var fs = require("fs");

fs.writeFile("app.js", "Data to be written", { flag: "a" }, err => {
  if (!err) {
    console.log("Written");
  }
});
