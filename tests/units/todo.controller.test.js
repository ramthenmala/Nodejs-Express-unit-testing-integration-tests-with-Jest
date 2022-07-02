const TodoController = require('../../src/controller/todo/todo.controller.js')

describe('TodoController', function () {
    it("Should Have CreateTodoFunction", ()=> {
        expect(typeof TodoController.createTodoFunction).toBe("function")
    }) 
})