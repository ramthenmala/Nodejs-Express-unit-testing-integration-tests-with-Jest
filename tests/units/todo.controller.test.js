const TodoController = require('../../src/controller/todo/todo.controller.js')
const TodoModel = require('../../src/models/todo/todo.schema.js')
const httpMocks = require('node-mocks-http');
const todoData = require('../mockData/todo/todo.json')

TodoModel.create = jest.fn();

describe('TodoController', function () {
    it("Should Have CreateTodoFunction", ()=> {
        expect(typeof TodoController.createTodo).toBe("function")
    });
    it("Should call todo method", ()=> {
        let res, req, next;
        res = httpMocks.createRequest();
        req = httpMocks.createResponse();
        next = null;
        req.body = todoData
        TodoController.createTodo(req, res, next);
        expect(TodoModel.create).toBeCalledWith(todoData);
    });
})