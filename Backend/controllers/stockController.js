const fakeData = require("../models/fakeDataModel");
const HoldingsModel = require("../models/holdings");
const Order = require("../models/orders");

let allpositions= async (req, res) => {
    let positions = await position.find();
    res.json(positions);
}

let allholdings= async (req, res) => {
    let holdings = await HoldingsModel.find({});
    res.json(holdings);
}

let newOrder=async (req, res) => {
    let newOrder = new Order({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    })
    await newOrder.save();
};

let getOrders=async(req,res)=>{
    let orders=await Order.find({});
    res.status(200).json(orders);
}

let allStocks=async(req,res)=>{
    let stocks=await fakeData.find({});
    res.status(200).json(stocks);
}

let addStock=async(req,res)=>{
    let {name,symbol,quantity,ltp}=req.body;
    let existing=await HoldingsModel.findOne({name:name});
    if(existing){
        const totalQty=quantity+existing.qty;
        const newAvg=((existing.avg*existing.qty+quantity*ltp)/totalQty).toFixed(2);
        existing.qty=totalQty;
        existing.avg=newAvg;
        existing.price=ltp;
        await existing.save();
    }else{
        let newStock=new HoldingsModel({
            name:name,
            qty:quantity,
            avg:ltp,
            price:ltp,
        });
        await newStock.save();
    }
    let newOrder=new Order({
        name:name,
        price:ltp,
        qty:quantity,
        mode:"Buy"
    });
    newOrder.save();
    res.status(200).json("Stock Added Successfuly");
};

let manipulateStock=async(req,res)=>{
    let {stock,quantity}=req.body
    let item=await HoldingsModel.findOne({name:stock.name});
    if(stock.action=="Buy"){
        const totalCost = item.avg * item.qty + stock.price * quantity;
        item.qty+=quantity;
        item.avg= (totalCost / item.qty).toFixed(2);
        await item.save();
    }else{
        if(item.qty>=quantity){
            item.qty-=quantity;
            if(item.qty<=0){
                await HoldingsModel.deleteOne({_id:item._id});
            }else{
                await item.save();
            }
        }
    }
    let newOrder=new Order({
        name:stock.name,
        price:stock.price,
        qty:quantity,
        mode:stock.action,
    });
    await newOrder.save();
    res.status(200).send("Stocks Updated Successfully");
}

let addToWatchList=async(req,res)=>{
    let currentstock=await HoldingsModel.findById(req.body._id);
    let modifiedStock=await HoldingsModel.findByIdAndUpdate(
        req.body._id,
        {$set:{inWatchlist:!currentstock.inWatchlist}},{new:true},
    );
    res.status(200).json("Watchlist updated")
}


module.exports={
    allpositions,
    allholdings,
    newOrder,
    allStocks,
    addStock,
    getOrders,
    addToWatchList,
    manipulateStock,
};