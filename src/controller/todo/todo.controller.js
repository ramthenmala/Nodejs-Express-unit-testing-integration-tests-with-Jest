const TodoModel = require('../../models/todo/todo.schema')

exports.createTodo = async  (req, res, next) => {
  const createModel = await TodoModel.create(req.body);
  res.status(201).json(createModel);
};