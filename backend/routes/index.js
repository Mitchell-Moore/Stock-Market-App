var express = require("express");
var router = express.Router();
var yahooFinance = require("yahoo-finance");
var processData = require("../public/process-data.js");

router.post("/getStock", function (req, res, next) {
  if (req.body.stock) {
    let stock = req.body.stock;
    let stockSplit = stock.split(",");
    if (stockSplit.length > 1) {
      yahooFinance.historical(
        {
          symbol: stockSplit[0],
          // from: "2012-01-01",
          // to: "2012-12-31",
          // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
        },
        function (err, quotes) {
          let data = processData.processData(quotes, stockSplit[0]);
          res.send(data);
        }
      );
    } else {
    }
  } else {
    res.status(404).send("No stock in body");
  }
});

router.get("/autoCompleteStockSearch", async function (req, res, next) {
  if (req.query.search) {
    let search = req.query.search;
    var data = processData.autoCompleteStock(search);
    res.send(data);
  } else {
    res.status(404).send("No search parameter");
  }
});

router.get("/getAllStockList", async function (req, res, next) {
  var data = processData.getAllStockList();
  res.send(data);
});

module.exports = router;
