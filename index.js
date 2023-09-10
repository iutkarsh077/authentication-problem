const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const addQuery = require('./authQuery');
app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.use('/', addQuery)
app.use('/signUp', addQuery);
mongoose.connect("mongodb://127.0.0.1:27017/my-auth").then(()=>{console.log("MongoDB connected!")}).catch((err)=>{
    console.log("error occured: ", err);
})

app.listen(port, ()=>{
    console.log(`Server is listening at ${port}`);
})