var mongoose = require('mongoose');

var schoolSchema = mongoose.Schema({
    name: String,
    address: String,
    listClass: Array
})

var School = mongoose.model('School', schoolSchema);
module.exports = School;