const knex = require('../../database/indexDataBase')
const tableName = 'products'

//select * from products
const getAll = () => knex(tableName)

//select * from products where id = ?
//recebe um id
const getById = (id) => {
    return knex(tableName)
        .where({ id: id })
        .then(([product]) => product)
}

//insert into products (nam,price) values(?,?)
//recebe um produto
const create = (product) => {
    return knex(tableName)
        .insert(product)
        .then(([inserted]) => inserted)
}

//delete from products where id =?
const del = (id) => {
    return knex(tableName)
        .where({ id: id })
        .del()

}
module.exports = {
    getAll,
    getById,
    create,
    del,
}