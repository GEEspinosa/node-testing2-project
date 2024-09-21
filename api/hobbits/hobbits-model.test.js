const Hobbits = require('./hobbits-model')
const db = require('../../data/dbConfig')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db.seed.run()
})

it('[0] environment is testing', () => {
    expect(process.env.NODE_ENV).toBe('testing')
})

describe('findAll database access function', () => {
    it('[1] retrieves all hobbits', async () => {
        const hobbits = await Hobbits.findAll()
        expect(hobbits).toHaveLength(3)
    })   
})

describe('findById database access function', () => {
    it('[2] retrieves hobbit by id', async () => {
        const frodo = {age: 50, books: "LOTR", id: 2, name: "Frodo Baggins"}
        const hobbit = await Hobbits.findById(2)
        expect(hobbit).toEqual(frodo)
    })
    it('[3] retrieves hobbit by id', async () => {
        const bilbo = {age: 130, books: "The Hobbit & LOTR", id: 1, name: "Bilbo Baggins"}
        const hobbit = await Hobbits.findById(1)
        expect(hobbit).toEqual(bilbo)
    })
})

describe('insert database access function', () => {
    it('[4] posts new hobbit', async () => {
        const newHobbit = {id: 4, age: 666, books: "Silmililiarian", name: "Killbo Haggins"}
        const actual = await Hobbits.insert(newHobbit)
        expect(actual[0]).toEqual(newHobbit)
    })
})
