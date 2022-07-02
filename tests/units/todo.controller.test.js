const TodoController = require('../../src/controller/todo/todo.controller.js')
const TodoModel = require('../../src/models/todo/todo.schema.js')
const httpMocks = require('node-mocks-http');
const todoData = require('../mockData/todo/todo.json')

TodoModel.create = jest.fn();

describe('TodoController', function () {
  let res, req, next;
  // Runs before every test
  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
  });
  it('Should Have CreateTodoFunction', () => {
    expect(typeof TodoController.createTodo).toBe('function');
  });
  it('Should call todo method', () => {
    req.body = todoData;
    TodoController.createTodo(req, res, next);
    expect(TodoModel.create).toBeCalledWith(todoData);
  });
  it('Should respond with status code 201', ()=> {
      req.body = todoData;
      TodoController.createTodo(req, res, next);
      expect(res.statusCode).toBe(201);
      expect(res._isEndCalled()).toBeTruthy();
  })
})