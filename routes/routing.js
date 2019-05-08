const tableData = require('../data/dataArry')

module.exports = function (app) {
  app.get('/api/tables', function (req, res) {
    res.json(tableData)
  })


  app.post('/api/tables', function (req, res) {
    if (tableData.length < 5) {
      tableData.push(req.body)
      res.json(true)
    }
  })
  app.post('/api/clear', function (req, res) {
    tableData.length = 0

    res.json({ ok: true })
  })
}
