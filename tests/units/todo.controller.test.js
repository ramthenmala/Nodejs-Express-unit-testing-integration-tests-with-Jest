const TodoController = require('../../src/controller/todo/todo.controller.js')
const TodoModel = require('../../src/models/todo/todo.schema.js')
const httpMocks = require('node-mocks-http');
const todoData = require('../mockData/todo/todo.json')

TodoModel.create = jest.fn();
let res, req, next;
// Runs before every test
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = null;
});
describe('TodoController', function () {
  beforeEach(() => {
    req.body = todoData;
  })
  it('Should Have CreateTodoFunction', () => {
    expect(typeof TodoController.createTodo).toBe('function');
  });
  it('Should call todo method', () => {
    TodoController.createTodo(req, res, next);
    expect(TodoModel.create).toBeCalledWith(todoData);
  });
  it('Should respond with status code 201', async ()=> {
      await TodoController.createTodo(req, res, next);
      expect(res.statusCode).toBe(201);
      expect(res._isEndCalled()).toBeTruthy();
  })
  it('Should return a json body', async ()=> {
      TodoModel.create.mockReturnValue(todoData);
      await TodoController.createTodo(req, res, next);
      expect(res._getJSONData()).toStrictEqual(todoData);
  })
})