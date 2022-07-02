const TodoModel = require('../../models/todo/todo.schema')

exports.createTodo = (req, res, next) => {
    const createModel = TodoModel.create(req.body)
    res.status(201).json(createModel);
}