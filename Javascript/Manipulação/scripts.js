/*
    Prototype

    prototype-based language
    prototype chain
    __proto__
*/

/*
    Type conversion (typecasting) vs Type coersion

    Alteração de um tipo de dado para outro tipo
*/
console.log(Number('9') + 5)

// Manipulando Strings e Numeros

// Transformar String em Numero e Numero em String

let string = '123'
console.log(Number(string))
let number = 321
console.log(String(number))

// Contar quantos caracteres tem uma palavra e quantos digitos 
// tem um numero

let word = 'Paralelepipedo'
console.log(word.length)
let number = 1234
console.log(String(number).length)

// Transformar um numero quebrado com 2 casas decimais
// e trocar ponto por virgula

let number = 345.33452345
console.log(number.toFixed(2).replace(".", ","))

// Transforme letras minusculas em maiusculas. Faça o contrario disso tambem

let word = "Programar é muito bacana"
console.log(word.toLowerCase().toUpperCase())

//Separe um texto que contem espaços, em um novo array onde
// cada texto é uma posiçao do array. Depois disso, transforme
// o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

//Verificar se o texto contem a palavra Amor

let phrase = "Eu quero viver o Amor!"
console.log(phrase.includes("Amor"))

// Criar Array com construtor

let myArray = nem Array ('a', 'b', 'c')
console.log(myArray)

// Contar elementos de um array

console.log(["a", "b", "c"].length)

// Transformar uma cadeia de caracteres em elementos de um array

let word = "manipulaçao"
console.log(Array.from(word))

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")
// adicionar no começo
techs.unshift("sql")
// remover do fim
techs.pop()
// remover do começo
techs.shift()
// pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
// remover 1 ou mais itens em qualquer posiçao do array
techs.splice(1, 2)
// encontar a posiçao de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)
console.log(techs)