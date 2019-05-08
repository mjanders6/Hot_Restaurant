// const tblDada = require('../data/dataArry')
const { join } = require('path')
module.exports = function (app) {

    app.get('/', (req, res) => {
        res.sendFile(join(__dirname, '../public/index.html'))
    })

    app.get('/tables', (req, res) => {
        res.sendFile(join(__dirname, '../public/tables.html'))
    })

    app.get('/reserve', (req, res) => {
        res.sendFile(join(__dirname, '../public/reserve.html'))
    })


}