var mongoose = require('mongoose');

var sujectSchema = mongoose.Schema({
    name: String,
    teacher: String,
})

var Suject = mongoose.model('Suject', sujectSchema);
module.exports = Suject;