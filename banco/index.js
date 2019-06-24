const mongoose = require('mongoose');

mongoose.connect('mongodb://i901:cjk8k83t@mongodb.i9.kinghost.net/i901');
mongoose.Promise = global.Promise;

module.exports = mongoose;
