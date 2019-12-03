var fs = require("fs");

// var obj = JSON.parse(fs.readFileSync("hollidays.json", "utf8"));
// console.log(obj);

fs.readFile("./hollidays.json", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log("toto");
