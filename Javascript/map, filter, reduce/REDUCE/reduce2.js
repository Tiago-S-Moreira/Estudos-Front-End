// carrinho de compras
// retornar o total a pagar


const itens = [
    {description: 'pen', quantity: 1, price: 3},
    {description: 'rule', quantity: 2, price: 5},
    {description: 'erase', quantity: 2, price: 6}
]

const priceTotal = itens.reduce((sum, actual) => sum + actual.price * actual.quantity, 0)
console.log(priceTotal)