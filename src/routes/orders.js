const { Router } = require('express')
const router = new Router()
const routerName = '/orders'
const controller = require('../controllers/orders')


//Lista todos os produtos, e será um array de produtos
router.get(routerName, controller.getAll)

//Pega os dados de um produto
router.get(`${routerName}/:id`, (req, res) => {
    res.json({
        message: 'Vai retornar os dados de um pedido dado um id',
        id: req.params.id,
    })
})

//Cria um pedido
router.post(routerName, controller.create)

//edita os dados de um produto
router.patch(`${routerName}/:id`, (req, res) => {
    res.json({
        message: 'Vai editar os dados de um pedido dado um id',
        id: req.params.id,
    })
})

//delete um produto
router.delete(`${routerName}/:id`, (req, res) => res.status(204).end())
module.exports = router