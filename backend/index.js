const express = require('express')
const cors = require('cors')
const pool = require('./db/pool')

const app = express()
app.use(cors())

app.get('/', (req, res) => {
  res.send('HELLO')
})

app.get('/item', async (req, res) => {
  const [results] = await pool.query('select * from item');
  res.json(results)
})

const port = 5000;

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})