const express = require('express')
const Hobbits = require('./hobbits-model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const hobbits = await Hobbits.findAll()
        res.status(200).json(hobbits)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const hobbit = await Hobbits.findById(req.params.id)
        res.status(200).json(hobbit)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newHobbit = await Hobbits.insert(req.body)
        res.status(201).json(newHobbit[0])
    } catch (err) {
        next(err)
    }
})

module.exports = router