const moment = require('moment')
const utcNow = moment().utc().format()
console.log(utcNow)
//funcao construtora nao deve ter retorno
module.exports = function Product(data){
    this.id = data.id
    this.name = data.name
    this.price = data.price
    this.created_at = data.created_at || utcNow
    this.updated_at = data.updated_at || utcNow
}
//quando coloco new qualquer retorno é ignorado
//sempre que invocar como new cria um novo produto
