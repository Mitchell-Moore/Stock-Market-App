var express = require("express");
var router = express.Router();
var yahooFinance = require("yahoo-finance");
var processData = require("../public/process-data.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("hjere");
  yahooFinance.historical(
    {
      symbol: "AAPL",
      from: "2012-01-01",
      to: "2012-12-31",
      // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
    },
    function (err, quotes) {
      var data = processData.processData(quotes);
      res.send(data);
    }
  );
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

module.exports = router;
