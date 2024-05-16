const { Router } = require('express')


const PartidaController = require('../controllers/PartidaController')


const partidaRoutes = Router()


// Controller
const partidaController = new PartidaController()


// Rotas
partidaRoutes.post('/create', partidaController.create)
partidaRoutes.get('/show:id', partidaController.show)
partidaRoutes.put('/update/:id', partidaController.update)


// Exporta
module.exports = partidaRoutes