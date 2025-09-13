const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const fakeDataSchema=new Schema({
    name: String,
    symbol: String,
    basePrice: Number,
    ltp:Number,
    change: Number,
    percentChange: Number,
});
const fakeData=mongoose.model("fakeData",fakeDataSchema);
module.exports=fakeData;