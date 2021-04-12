var mongoose = require('mongoose')

var studentSchema  = mongoose.Schema({
    name: String,
    age: String,
    address: String,
    hl: String,
    hk: String
})

var Student =  mongoose.model('Student', studentSchema);
module.exports = Student