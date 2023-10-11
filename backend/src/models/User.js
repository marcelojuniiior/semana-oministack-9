const mongoose = require('mongoose');


//criando campos na tabela
const UserSchema = new mongoose.Schema({
    email: String,  //atenção aos tipos inicios maiusculas 
});


// a partir de agora está criando a entidade, primeiro parametro é o nome da entidade o segundo o Schema
module.exports = mongoose.model('User', UserSchema)