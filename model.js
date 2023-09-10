const mongoose =  require('mongoose');

const user = new mongoose.Schema({
    first_name:{
        type: String,
        required: true,
    },

    last_name:{
        type: String,
    },

    email:{
        type: String,
        required: true,
        unique: true,
    },

    password:{
        type: String,
        required: true,
    },
})

const myuser = mongoose.model('users', user);

module.exports = myuser;