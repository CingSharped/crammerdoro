const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const app = express();

const userRoutes = require('./routers/users')

app.use(cors());
app.use(express.json());
app.use(logger("dev"));

app.get('/', (req, res) => {
  res.send('Welcome to my Express API template')
})

app.use('/users', userRoutes)


module.exports = app