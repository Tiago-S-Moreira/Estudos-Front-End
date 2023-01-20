// a partir de um array de objetos pessoais, retornar um objeto com um contador
//de pessoa por idade

const pessoas = [
    {nome: "Daniel", idade: 28},
    {nome: "Maria", idade: 29},
    {nome: "Marta", idade: 29}
]

const countAge = pessoas.reduce((idade, atual) => {
    idade[atual.idade] = idade[atual.idade] || []
    idade[atual.idade].push(atual.nome)
    return idade
}, {})
console.log(countAge);


// Ao retornar objetos, incluir {} vazia