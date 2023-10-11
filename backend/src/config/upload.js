const multer = require('multer');
const path = require('path');



//storage como o multer vai salvar os arqivos recebidos da aplicação diskStorage: disco rigido
// destination: qual pasta os arquivos vão ser salvos
// path resolve: usado apara voltar as pastas, cada .. = voltando um diretorio, ___dirname = informa o diretorio do arquivo atual
// filename: serve para renomar os arquivos, req = requisição, file pega os dados do arvivo(tipo do arquivo tamanho e tal), cb callback (vai ser chamada quando o arquivo estiver nomeado corretamente)

module.exports = {
    storage: multer.diskStorage({ 
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req,file, cb) => {
            const ext = path.extname(file.originalname);  //pegando a extensão da imagem
            const name = path.basename(file.originalname, ext); // pegando o nome da imagem

            cb(null, `${name}-${Date.now()}${ext}`) // concatenando infomações da imagem
        }
    })
}