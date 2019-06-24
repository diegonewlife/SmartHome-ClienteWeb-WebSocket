const mongoose = require('../banco');
 

const UserSchema = new mongoose.Schema({
  ventilador:{
    type:Boolean,
    required: true,
    default: false
  },
  sala:{
    type:Boolean,
    required: true,
    default: false
  },
  quarto:{
    type:Boolean,
    required: true,
    default: false
  },
  tv:{
    type:Boolean,
    required: true,
    default: false
  },
  data: {
    type: Date,
    required: true,

  },
  hora:{
    type: String,
    required: true,
  },
 
});

 

const User = mongoose.model('Agendamentos', UserSchema);
module.exports = User;
