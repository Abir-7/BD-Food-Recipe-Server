const express = require('express')
const app = express()
const port =  process.env.port || 5000
var cors = require('cors')
app.use(cors())
const chefData = require('./data/chef-data.json')
app.get('/', (req, res) => {
    res.send('Server running.....')
  })

  app.get('/chef', (req, res) => {
    res.send(chefData)
  })

  app.get('/chef/:id', (req, res) => {
    const id =parseInt( req.params.id);
    const selectedChef = chefData.find(newsChef => newsChef.id === id)
    res.send(selectedChef)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})