// models
const mongoose = require('mongoose');


// db

const userSchema = new mongoose.Schema({
    fullName: {type:String, required: true},
    phoneNumber: {type:String, required: true, unique: true},
    password: {type:String, required: true},
    uniqueCode: {type:String, unique: true},
    role: {type: String, enum:['user','admin'],default:'user'},
    // seesio
    sessions: {type: Number, default: 0 },
    planType: {type: String, default:'none'},
    registrationDate: { type: Date, default: Date.now }
});

// export
module.exports = mongoose.model('User',userSchema);