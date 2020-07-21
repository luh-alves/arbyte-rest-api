
const knex = require('../../database/indexDataBase')
const Order = require('../models/Order')
const tableName = 'orders'

//select * from orders
const getAll = async () => {
    const orders = await knex(tableName)
    return orders.map((order) => new Order(order))
}

//select * from orders where id = ?
const getById = async (id) => {
    const [order] = await knex(tableName).where({ id: id })
    return new Order(order)
}

//insert into orders (product_id, ... ) value(?)
const create = async (order) => {
    const [id] = await knex(tableName).insert(order)
    return id

}

module.exports = {
    getAll,
    create,
    getById,
}