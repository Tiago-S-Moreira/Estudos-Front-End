// Transformar um array em um unico valor

const numeros = [0, 4, 2, 4, 7]
// método tradicional
let acumulador = 0
for(let i = 0; i < numeros.length; i++){
    acumulador += numeros[i]
}

//let total = acumulador

// método reduce
const total = numeros.reduce((acumulador, number) => {
    return acumulador + number
})
console.log(total)
