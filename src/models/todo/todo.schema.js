const mongoose = require('mongoose');

const TodoModel = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    done: {
        required: true,
        type: Boolean,
    }
})

const Todo = mongoose.model('Todo', TodoModel)

module.exports = Todo