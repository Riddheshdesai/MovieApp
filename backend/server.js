const express = require("express");
const app = express();
const mongoose = require("mongoose");
const movie = require("./router/movie");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// mongoose.connect("mongodb://localhost:27017/movie",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// },()=>{
//     console.log("connected to DB")
// })

const cors = require("cors");
app.use(cors())

app.use("/", movie);

app.listen(5000,()=>{
    console.log("started server")
})
