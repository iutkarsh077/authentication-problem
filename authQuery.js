const myusers = require('./model');
const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    return res.send("Hello, This is  SignUp Page!");
})

router.get('/login', (req, res)=>{
    return res.send("This is a login page!")
})

router.post('/signUp', (req, res)=>{
    const body = req.body;
    if(!body.first_name || !body.email || !body.password){
        return res.json({Mission: "failed fill all the requirements!"});
    }
    const found = myusers.findOne({email: body.email});
    if(found != null){
       return res.json({Mission: "Success"}).redirect('/login');
    }
    console.log(req.body);
    const user = {
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        password: body.password,
    }
    myusers.collection.insertOne(user).then(()=>{
       return res.status(201).json({Task: "your creditentials is saved successfully!"});
    }).catch((err)=>{
        return res.status(401).json({Task: "failed to add your creditentials: ", err});
    })
})

module.exports = router;