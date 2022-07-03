const request = require('supertest');
const app =  require('../../src/app.js')
const newTodo = require('../mockData/todo/todo.json')

const endPointUrl = '/todos/';

describe("Test the whole application", () => {
    it("TODO POST", async() => {
        const response = await request(app).post(endPointUrl).send(newTodo);
        expect(response.statusCode).toBe(201)
        expect(response.body.title).toBe(newTodo.title)
        expect(response.body.done).toBe(newTodo.done);
    })
})
 