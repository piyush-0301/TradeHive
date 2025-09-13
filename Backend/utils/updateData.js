const fakeData = require("../models/fakeDataModel");
const HoldingsModel = require("../models/holdings");

function getRandom(base) {
    const fluctuations = (Math.random() - 0.5) * 20;
    const newLtp = +(base + fluctuations).toFixed(2);
    const change = +(newLtp - base).toFixed(2);
    const percentChange = +((change / base) * 100).toFixed(2);
    return { newLtp, change, percentChange };
};

async function updateHoldings() {
    const holdings = await HoldingsModel.find({});
    for (let holding of holdings) {
        let fake = await fakeData.findOne({ name: holding.name });
        if (fake) {
            const currentPrice = fake.ltp;
            const avgPrice = holding.avg;
            const percentChange = ((currentPrice - avgPrice) / avgPrice) * 100;

            holding.price = currentPrice;
            holding.percent = percentChange.toFixed(2);
            holding.isDown = currentPrice < avgPrice;
        }
        await holding.save();
    }
    const newHoldings=await HoldingsModel.find({});
    return newHoldings
}
async function updateValues(io) {
    const Stocks = await fakeData.find({});
    for (let stock of Stocks) {
        const { newLtp, change, percentChange } = getRandom(stock.basePrice);
        await fakeData.findByIdAndUpdate(stock._id, {
            ltp: newLtp,
            change: change,
            percentChange: percentChange,
        })
    }
    const updatedStock = await fakeData.find({});
    let newHoldings=updateHoldings();
    io.emit("stock-updated", updatedStock,newHoldings);
}
module.exports = updateValues;