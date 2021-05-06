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

const processData = (quotes, symbol) => {
  let dataArr = [];
  quotes.forEach( obj => {
    dataArr.push({x: obj.date, y: obj.adjClose});
  });
  let arr = [{id: symbol, data: dataArr}]
  return arr;
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

const getAllStockList = () => {
  return stockArr;
};

module.exports = { processData, autoCompleteStock, getAllStockList };
