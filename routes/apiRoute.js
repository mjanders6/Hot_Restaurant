const { join } = require('path')

const dbArry = require('../data/dataArry.js')

module.exports = function (app) {
    app.get('/dataArry', (req, res) => {
        res.json(dbArry)
    })

}