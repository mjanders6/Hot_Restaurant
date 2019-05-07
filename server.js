const express = require('express')
const { join } = require('path')

const app = express()

// middleware
app.use(express.static(join(__dirname, '/public')))
app.use(express.urlencoded({extend: true}))
app.use(express.json())

const routes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoute')

routes(app)
apiRoutes(app)

app.listen(process.env.PORT || 3000)

