const express = require("express");
const mongoose = require("mongoose");
const fakeData = require("./models/fakeDataModel");
const updateValues = require("./utils/updateData");
const cors = require("cors")
const { Server } = require("socket.io");
const { createServer } = require('http');

const { router } = require("./routes/stockRoutes");
const userRoutes=require("./routes/userRoutes");


const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["*"],
        credentials: true,
    }
});

const MONGO_URL = "mongodb://127.0.0.1:27017/zerodha"
async function main() {
    await mongoose.connect(MONGO_URL)
}
main().then(() => {
    console.log("Connected");
    setInterval(() => {
        updateValues(io);
    }, 2000);
}).catch((err) => {
    console.log(err)
});


const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

io.on("connection", (socket) => {
    socket.on("disconnect", () => {
    });
});



app.use("/",router);
app.use("/",userRoutes)

server.listen(3000, () => {
    console.log("Listening on port 3000");
});
