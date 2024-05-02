const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const { connectToDb } = require('./db/data-connections');
const collectablesRoutes = require('./routes/collectables-routes')
const signUpRoutes = require('./routes/sign-up-routes')
const loginRoutes = require('./routes/login-routes.js')

app.use(cors());
app.use(bodyParser.json())

app.use('/collectables', collectablesRoutes)
app.use('/signup', signUpRoutes)
app.use('/login', loginRoutes)



const PORT = 5000;
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`)
  await connectToDb();
})