const tblDada = require('../data/dataArry')

module.exports = function (app) {

    app.get('/tables', (req, res) => {
        res.json(tblData)
    })

}