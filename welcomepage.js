const myusers = require('./model');
const express = require('express');
const router = express.Router();


router.get("/welcomepage", (req, res)=>{
    res.send(`Welcome back ${first_name}`)
})

module.exports = router;