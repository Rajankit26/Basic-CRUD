require ("dotenv").config()

const express = require("express")
const app = express();

const connectToDB = require("./config/db.js")


app.get('/', (req,res) =>{
    res.send("Hello from Server!")
})


// Initialising connection to DB
connectToDB();

module.exports = app;

