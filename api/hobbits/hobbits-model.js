const db = require('../../data/dbConfig')

async function findAll () {
    return await db('hobbits')
}

async function findById (id) {
    return await db('hobbits').where('id', id).first()
}

async function insert(payload) {
    return await db('hobbits').insert(payload).then(([id]) => {
        return db('hobbits').where('id', id)
    }
    
    )
}

module.exports = {
    findAll,
    findById,
    insert
}