const { Router } = require('express')
const router = new Router()
const routerName = '/users'
const controller = require('../controllers/users')


//Cria um produto
router.post(routerName, controller.create)

router.post(`${routerName}/login`, controller.login)

module.exports = router