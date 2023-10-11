const User = require('../models/User')
const Spot = require('../models/Spot')

module.exports = {
    async index(req,res){
        const{tech} = req.query; //pega o conteudo da pesquisa 
        const spots = await Spot.find({techs: tech});  //passa dentro do find o campo no modelo e depois o objeto a ser pesquisado

        return res.json(spots);
    },


    async store (req, res){
        const {filename} = req.file;
        const {company,techs,price} = req.body;
        const {user_id} = req.headers;

        const user = await User.findById(user_id);

        if(!user){
            return res.status(400).json({ERRO: 'USER DOES NOT EXISTS'})
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),  //percorre o array separa por virgula e tira os espaços
            price
        })

        return res.json({spot})
    }
};