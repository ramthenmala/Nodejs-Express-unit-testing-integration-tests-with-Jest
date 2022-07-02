const TodoModel = require('../../models/todo/todo.schema')

exports.createTodo = () => {
    TodoModel.create()
    console.log('createTodo method called');
}