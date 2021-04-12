var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
        name: String,
        age: String,    
        address: String
});

var User = mongoose.model('User', userSchema);
module.exports = User;