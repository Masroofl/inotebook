const connectToMongo = require('./db');
const express = require('express')

// Call the connectToMongo function to connect to your database
connectToMongo();

//got from expressjs.com
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })