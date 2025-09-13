const mongoose=require("mongoose");
const fakeData=require("./models/fakeDataModel");
const HoldingsModel=require("./models/holdings");
const data=require("./fake_stocks_200");
const MONGO_URL = "mongodb://127.0.0.1:27017/zerodha"
async function main() {
    await mongoose.connect(MONGO_URL)
}
main().then(async() => {
    await fakeData.deleteMany({});
    await fakeData.insertMany(data);
    console.log("Data inserted in Db");
}).catch((err) => {
    console.log(err)
});