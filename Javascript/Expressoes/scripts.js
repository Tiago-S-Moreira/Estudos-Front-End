/*
    Expressoes e Operadores

    Expressions
    Operators
        Binary
        Unary
        Ternary
*/
/*
    New

    lef-hand-side expression
    criar um novo objeto
*/
let date = new Date ('2020-12-01')
console.log(date.__proto__)
/*
    Operadores unarios
    typeof
    delete
*/
const person = {
    name: 'Tiago',
    age: 36,
}
delete person.age

console.log(person)

// Operadores Aritmeticos

// multiplicação
console.log(3.2 * 5.5)

// divisao
console.log(12 / 2)

// soma
console.log(34 + 67)

// subtração 
console.log(34 - 23)

// resto da divisao
let remainder
remainder = 11 % 10
console.log(remainder)

// incremento ++ 
let increment = 0
increment++
console.log(increment)

// decremento --
let decrement = 0
console.log(decrement--)

// exponencial **
console.log(3 ** 2)

// Grouping operator ( )

let total = (2 + 3) * 5
console.log(total)

// Operadores de comparaçao

// Ira comparar valores e retornar um boolean como resposta a comparaçao

let one = 1
let two = 2

// == igual a 
console.log(two == 1)
console.log(one == "1")

// != diferente de

console.log(one != two)
console.log(one != 1)
console.log(one != "1")

// === estritamente igual a

console.log(one === "1")
console.log(one === 1)

// !== estritamente diferente de

console.log(two !== "2")
console.log(two !== 2)

// > Maior que
console.log(one > two)

// >= Maior igual a 
console.log(one >= 1)
console.log(two >= 1)

// < Menor que
console.log(one < two)

// <= Menor igual que
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)

// Operadores de atribuição (Assignment)

let x

// assignment
x = 1

// addition assignment
x = x + 2
x += 2

// subtraction assignment
x = x - 1
x -= 1

// multiplication assignment
x = x * 2
x *= 2

// division assignment
x = x / 2
x /= 2

// remainder, exponetiation
x %= 2
x **= 2

// Operadores logicos (logical operators)

// - 2 valores booleanos, quando verificados, 
// resultara em verdadeiro ou falso

let pao = true
let queijo = true

// AND &&
console.log(pao && queijo)

// OR || 
console.log(pao || queijo)

// NOT !
console.log(!pao)

// Operador Condicional (Ternario)

// Dependendo da condiçao, nos receberemos valores diferentes

// Condiçao entao valor 1 se nao valor 2
// Condition ? value1 : value2

let pao = true
let queijo = false

const niceBreakfast = pao && queijo ? 'Cafe top' : 'Cafe ruim'

console.log(niceBreakfast)

// Maior de 18

let age = 16
const canDrive = age >= 18 ? 'can drive' : "can´t drive"
console.log(canDrive)

// Operador de string (String operator)

// comparison (comparação)

console.log('a' ==  'a')

// concatenation (concatenação)
// Retorna a uniao de duas strings

let alpha = 'alpha'
alpha += 'bet'
console.log(alpha + 345)

/*
    FALSY
    Quando um valor é considerado false em contexto onde
    um booleando é obrigatorio (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log(0 ? 'verdadeiro' : 'false')

/*
    TRUTHY
    Quando um valor é considerado true em contexto onde um
    booleano é obrigatorio (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log(true ? 'verdadeiro' : 'false')

/*
    Operator precedence
        Procedencia de operadores

    grouping ( )
    negaçao e incremento ! ++ --
    multiplicaçao e divisao * /
    adiçao e subtraçao + -
    relacional < <= > >=
    igualdade == != === !==
    AND &&
    OR ||
    condicional ?: 
    assingment (atribuiçao) = += -= *=
*/