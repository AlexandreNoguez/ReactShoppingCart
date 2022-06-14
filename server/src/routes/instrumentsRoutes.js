const express = require('express')
const routes = express.Router()

const {
    deleInstrumentById,
    editInstrumentsRegister,
    listAllInstruments,
    listOneInstrumentById,
    registerNewInstruments
} = require('../controllers/instrumentsController')

// authRoutes
routes.post('/', registerNewInstruments)
routes.get('/:id', listOneInstrumentById)
routes.get('/', listAllInstruments)
routes.put('/:id', editInstrumentsRegister)
routes.delete('/:id', deleInstrumentById)

module.exports = routes
