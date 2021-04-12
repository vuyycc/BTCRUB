var mongoose = require('mongoose')

var classSchema = mongoose.Schema({
    name: String,
    listStudent: Array
});

var Class = mongoose.model('Class', classSchema);
module.exports = Class