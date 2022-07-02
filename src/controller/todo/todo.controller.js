const TodoModel = require('../../models/todo/todo.schema')

exports.createTodo = (req, res, next) => {
    TodoModel.create(req.body)
    res.status(201)
}