/*
    Sistema de gastos familiar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        receitas[]
        despesas[]
    Agora crie uma funçao que irá calcular o total das receitas e despesas
    e irá mostrar uma mensagem se a familia esta com saldo positivo ou 
    negativo, seguido do valor do saldo
*/  

let family = {
    receitas:[1850.00, 1530.00, 1025.00, 356.00],
    despesas:[256.93, 601.42, 120.00, 89.35, 101.30, 191.22, 407.88, 750.00]
}

function sum(array) {
    let total = 0;
    for (let value of array){
        total += value
    }
    return total
}

function calculateBalance() {
    const calculateReceitas = sum(family.receitas)
    const calculateDespesas = sum(family.despesas)

    const total = calculateReceitas - calculateDespesas

    const positive = total >= 0
    let balanceText = "negativo"


    if (positive) {
        balanceText = "positivo"
    }
    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}`)
}

calculateBalance ()