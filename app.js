const axios = require("axios");
var fs = require("fs");

const getData = () => {
  return axios.get(`https://date.nager.at/api/v2/publicholidays/2020/FR`);
};

getPromiseData = async () => {
  const res = await getData();
  fs.writeFile(
    "./hollidays.json",
    JSON.stringify(res.data),
    { encoding: "utf8", flag: "w" },
    err => {
      if (err) throw err;
    }
  );
};

getPromiseData();
