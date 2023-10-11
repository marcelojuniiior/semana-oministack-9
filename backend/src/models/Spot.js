const mongoose = require('mongoose');


//criando campos na tabela
const SpotSchema = new mongoose.Schema({
    thumbnail: String,  //atenção aos tipos inicios maiusculas 
    company: String,
    price: String,
    techs: [String],    
    user: {
        type: mongoose.Schema.Types.ObjectId, // pegando o Id do user
        ref: 'User', // referencia pra qual model vai essa informação
    }
},{
    toJSON: {
        virtuals: true,
    }
});


SpotSchema.virtual('thumbnail_url').get(function(){
    return `http://localhost:3333/files/${this.thumbnail}`
})

// a partir de agora está criando a entidade, primeiro parametro é o nome da entidade o segundo o Schema
module.exports = mongoose.model('Spot', SpotSchema)