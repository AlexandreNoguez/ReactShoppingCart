const express = require('express')
const cors = require('cors')
const app = express()
const instrumentsRoutes = require('./routes/instrumentsRoutes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Routes
app.use('/api/catalog', instrumentsRoutes)

app.listen(3333)
