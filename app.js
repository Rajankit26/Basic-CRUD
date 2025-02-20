require ("dotenv").config()

const express = require("express")
const connectToDB = require("./config/db.js")

const app = express();

// Express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Initialising connection to DB
connectToDB();

const userRoute = require("./routes/userRoutes.js")


app.use('/',userRoute)


module.exports = app;

