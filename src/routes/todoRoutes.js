const express = require('express');
const todoContoller = require('../controller/todo/todo.controller.js')
const routesTodo = express.Router();

routesTodo.post('/', todoContoller.createTodo);

module.exports = routesTodo;