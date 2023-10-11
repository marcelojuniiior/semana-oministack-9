const express = require('express');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const multer = require('multer');
const uploadConfig = require('./config/upload');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/spots', SpotController.index);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);


module.exports = routes;



// primeiro parametro passa qual é a rota da pagina /..., segundo parametro é uma funcão pode receber request, response
//req.query para pegar os dados vindos da requisição na barrra de endereço query parms
//routes.post("/users", (req,res) =>{
//    return res.json({idade: req.query.idade}    )
//})

//routes.get("/", (req,res) =>{
//    return res.json({idade: req.query.idade});
//})

// req params para acessar e editar pegando id depois da barra
//routes.put('/users/:id', (req,res) => {
//    return res.json({id: req.params.id})
//})


// req.body para pegar os dados do corpo da requisição tais como nome, idade email do usuario
//routes.post('/users/post', (req,res) => {
//    return res.json(req.body)
//})

//exportando todas as rotas