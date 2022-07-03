const express = require('express');
const routesTodo = require('./routes/todoRoutes.js');
const app = express();
const mongoDB = require('./mongodb/connect.mongodb.js')

mongoDB.connect();
app.use(express.json());

app.use('/todos', routesTodo);

app.get('/', (req, res) => {
    res.status(200).json({
      msg: 'Root Log',
    });
})

module.exports = app