// CREATE SERVER
const express = require("express");
const app = express();

// CREATE cors for whene i update the data will update in the chrome either
const cors = require("cors");
app.use(cors());

// RES.DATA will work
app.use(express.json());

// work the server
app.listen("3003", () => {
    console.log("Serever Works");
});




// CONNECT TO DB
const   username = "rayen",
        password = process.env.PASSWORD,
        database ="roubly" ;

const mongoose = require("mongoose");
const link =`mongodb+srv://${username}:${password}@cluster0.rfvvtjp.mongodb.net/${database}?retryWrites=true&w=majority`;

async function connect(){
    try{
        await mongoose.connect(link);
        console.log("Conneted to MongoDB");
    }catch(error){
        console.error(error);
    }
}
connect()

// USER MODEL
const userModel = require('./models/user.js');

// GET REQUEST
app.get("/", async (req, res) => {
    const a = await userModel.find();
    res.json(a);
});

// CREATE USER
app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new userModel(user);
    await newUser.save();

    res.json(user);
});



/*

async function connect(){
    try{
        await mongoose.connect(link);
        console.log("Conneted to MongoDB");
    }catch(error){
        console.error(error);
    }
}
connect()
*/