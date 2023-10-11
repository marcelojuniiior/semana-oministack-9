// dentro do controler temos os metodos, INDEX(criando um metodo que vair retornar uma listagem de sessoes), SHOW(uma unica sessao), STORE(criar ma sesao), UPDATE(atualizar uma sessao), DESTROY(deletar uma sessao)

const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const {email} =  req.body;   //procurando email dentro de req.body 

        let user = await User.findOne({email: email});

        if(!user){
            await User.create({email})
        }

        //const user = await User.create({email}) //variavel é diferente da importada 

        return res.json(user);
    }
}