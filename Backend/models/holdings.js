const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const HoldingSchema=new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    percent:String,
    isDown:{type:Boolean,required:true,default:false},
    inWatchlist:{
        type:Boolean,
        default:false,
    },    
});
const HoldingsModel=mongoose.model("HoldingsModel",HoldingSchema);
module.exports=HoldingsModel;