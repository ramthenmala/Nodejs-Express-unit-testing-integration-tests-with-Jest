const TodoController = require('../../src/controller/todo/todo.controller.js')
const TodoModel = require('../../src/models/todo/todo.schema.js')

TodoModel.create = jest.fn()

describe('TodoController', function () {
    it("Should Have CreateTodoFunction", ()=> {
        expect(typeof TodoController.createTodo).toBe("function")
    });
    it("Should call todo method", ()=> {
        TodoController.createTodo();
        expect(TodoModel.create).toBeCalled();
    });
})