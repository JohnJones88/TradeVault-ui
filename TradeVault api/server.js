const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const { connectToDb } = require('./db/data-connections');
const collectablesRoutes = require('./routes/collectables-routes')

app.use(bodyParser.json())
app.use('/collectables',collectablesRoutes)



const PORT = 5000;
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`)
  await connectToDb();
})