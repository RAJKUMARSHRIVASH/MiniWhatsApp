const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    profilePic:String,
    contact:[]
});

const UserModel = mongoose.model("user",userSchema);

module.exports = UserModel;