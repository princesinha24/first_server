const express = require("express");
const data = require("./data.json");

const fs = require("fs");
const getUser =require("./models/user");
const connector = require("./connection");
const userRoute = require("./routers/user");
const middleWare = require("./middleware");

const app=express();
const port_no=8000;
// middleware to change the request contents
app.use(express.urlencoded({extended:false}));

//connect to db
connector.connectMongoDb('mongodb://127.0.0.1:27017/local_test_db1');

// our own middleware
app.use(middleWare);
app.use("/user",userRoute);

app.listen(port_no,connector.portListen(port_no));
console.log("hello Let's start");