const db = require('../data/dbConnect')

module.exports = {
    get,
    getById,
    add,
    pick
}

function get(){
    return db('boogers')
    
}

function getById(){
    return db('boogers').where({id}).first()
}

function add(booger){
    return db('boogers')
    .insert(booger, 'id')
    .then(ids => {
        return getById(ids[0])
    })
}

function pick(id){
    return db("boogers")
    .where("id", id)
    .del();
}