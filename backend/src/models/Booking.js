const mongoose = require('mongoose');


//criando campos na tabela
const BokingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',// referencia pra qual model vai essa informação
    },
    spot:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot',// referencia pra qual model vai essa informação
    }
});


// a partir de agora está criando a entidade, primeiro parametro é o nome da entidade o segundo o Schema
module.exports = mongoose.model('Booking', BokingSchema)