const tblDada = require('../data')

module.exports = function (app) {

    app.get('/tables', (req, res) => {
        res.json(tblData)
    })

}