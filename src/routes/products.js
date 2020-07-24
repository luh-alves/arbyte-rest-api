const { Router } = require('express')
const router = new Router()
const routerName = '/products'
const controller = require('../controllers/products')
const authenticate = require('./middlewares/authenticate')



//Lista todos os produtos, e será um array de produtos
router.get(routerName, controller.getAll)

//Pega os dados de um produto
router.get(`${routerName}/:id`, controller.getById)

//Cria um produto
router.post(routerName, authenticate, controller.create)

//edita os dados de um produto
router.patch(`${routerName}/:id`, controller.update)

//delete um produto
router.delete(`${routerName}/:id`, controller.del)

module.exports = router