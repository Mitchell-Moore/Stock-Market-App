const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");

const stockArr = [];
const csvPath = path.join(__dirname, "../assests/stocks.csv");
fs.createReadStream(csvPath)
  .pipe(csv())
  .on("data", (row) => {
    stockArr.push(row);
  })
  .on("end", () => {});

const processData = (data) => {
  console.log(data);
  return data;
};

const autoCompleteStock = (query) => {
  query = query.toLowerCase();
  let queryLength = query.length;
  let searchResultArr = [];
  console.log(query);
  for (const stock of stockArr) {
    if (
      stock.Symbol.toLowerCase().substring(0, queryLength) == query ||
      stock.Name.toLowerCase().substring(0, queryLength) == query
    ) {
      searchResultArr.push(stock);
    }
  }
  return searchResultArr;
};

module.exports = { processData, autoCompleteStock };
