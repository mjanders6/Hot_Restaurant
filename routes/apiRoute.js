// const { join } = require('path')

const dataArry = require('../data/dataArry')

module.exports = function (app) {

    app.get('/dataArry', (req, res) => {
        res.json(dataArry)
    })

    app.get('/dataArry/:tableNumber', (req, res) => {
        dataArry.forEach(table => {
            if (table.tableNumber === parseInt(req.params.tableNumber)) {
                res.json(table)
            }
        })
    })

    app.delete('/dataArry/:tableNumber', (req, res) => {
        dataArry.forEach((table, index) => {
            if (parseInt(table.tableNumber) === parseInt(req.params.tableNumber)) {
                dataArry.splice(index, 1)
            }
        })
        res.send('Table Deleted')
    })

app.post('/dataArry', (req, res) => {
    let newUser = req.body
    newUser.tableNumber = dataArry.length + 1
    dataArry.push(newUser)
    res.send('Table was added! Congratulations!')
})

}