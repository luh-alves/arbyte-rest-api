const { Router } = require('express')
const router = new Router()
const routerName = '/products'
const tableName = 'products'
const controller = require('../controllers/products')
const knex = require('../../database/indexDataBase')


//Lista todos os produtos, e será um array de produtos
router.get(routerName, controller.getAll)

//Pega os dados de um produto
router.get(`${routerName}/:id`,controller.getById)

//Cria um produto
router.post(routerName, controller.create)

//edita os dados de um produto
router.patch(`${routerName}/:id`, async (req, res) => {
    try {
        const [found] = await knex(tableName).where({ id: req.params.id })
        if (!found) {
            const err = Error('Not found')
            err.status = 404
            throw err
        }
        const updated = await knex(tableName)
            .where({ id: req.params.id })
            .update(req.body)
        res.json(updated)
    } catch (err) {
        res.status(err.status || 500).json({ message: err.message })
    }
})

//delete um produto
router.delete(`${routerName}/:id`, controller.del)

module.exports = router