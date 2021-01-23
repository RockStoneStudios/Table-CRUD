const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema ({
    nombre : String,
    email : String,
    direccion : String,
    telefono : String
});


module.exports = mongoose.model('Usuario', userSchema);