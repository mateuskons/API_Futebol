const { Router } = require('express')


const TimeController = require('../controllers/TimeController')


const timeRoutes = Router()


// Controller
const timeController = new TimeController()


// Rotas
timeRoutes.post('/create', timeController.create)
timeRoutes.delete('/delete/:id', timeController.delete)

// Exporta
module.exports = timeRoutes