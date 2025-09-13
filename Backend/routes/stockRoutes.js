const Router=require("express");
const stock=require("../controllers/stockController");
const router=Router();

router.route("/allpositons").get(stock.allpositions);
router.route("/allholdings").get(stock.allholdings);
router.route("/newOrders").post(stock.newOrder);
router.route("/api/stocks").get(stock.allStocks);
router.route("/api/addStock").post(stock.addStock);
router.route("/api/manipulateStock").post(stock.manipulateStock)
router.route("/api/getOrders").get(stock.getOrders);
router.route("/api/addToWatchlist").post(stock.addToWatchList);

module.exports=router;