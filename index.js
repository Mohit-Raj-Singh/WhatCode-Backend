const express = require("express");
const { connection } = require("./config/db");
require("dotenv").config();
const cors = require("cors");
const { userRouter } = require("./routes/UserRoute");
const { cityRouter } = require("./routes/CityRoute");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.use("/cities", cityRouter);


app.listen(process.env.port, async () => {
    try {
        await connection;
    } catch (err) {
        console.log("error");
    }
    console.log(`server is running at port ${process.env.port}`);
});