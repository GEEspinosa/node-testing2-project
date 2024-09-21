const request = require('supertest')
const db = require('../data/dbConfig')

const server = require('./server')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db.seed.run()
})

describe('hobbits-router.js', () => {
    describe('get router', () => {
        it('[5] return an OK status code from get route', async () =>{
            const expectedStatusCode = 200
            const response = await request(server).get('/api/hobbits')
            expect(response.status).toEqual(expectedStatusCode)
        } )
        it('[6] return a JSON body from get route', async() => {
            const response = await request(server).get('/api/hobbits')
            expect(response.type).toBe('application/json')
        })
    })
    describe('get by id router', () => {
        it('[7] return OK status from route', async () => {
            const expected = 200
            const response = await request(server).get('/api/hobbits/2')
            expect(response.status).toEqual(expected)
        })
    })
})