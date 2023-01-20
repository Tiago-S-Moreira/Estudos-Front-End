// Declare uma variavel de nome weight
let weight;

// Que tipo de dado é a palavra acima?
console.log(typeof weight)

/*
Declare uma variavel e atribua valores para cada um dos dados:
    name: String
    age: Number (integer)
    stars: Number (float)
    isSubscribed Boolean
*/
let name = "Tiago"
let age = 36
let stars = 4.8
let isSubscribed = true

/*
A variavel student abaixo é de que tipo de dados?
Object
Atribua a ela as mesmas propriedades e valores do exercicio 3

Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight> kg.
    Atenção substitua  <name> <age> e <weight> pelos
    valores de cada propriedade do objeto
*/
let student {
     name: "Tiago",
     age: 36,
    weight: 68.2,
    isSubscribed: true,
};
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/*
Declare uma variavel do tipo Array, de nome students e atribua a ela nenhuma valor, 
ou seja, somente Array vazio
*/
let student = []

/*
Reatribua o valor para a variavel acima, colocando dentro dela o objeto student
da questao 4. (Nao copiar e colar o objeto, mas usar o objeto criado  e inserir
    ele no Array.)
*/
 students = [
     student
 ]
 console.log(students)

 // Coloque no console o valor da posiçao zero do Array acima
 console.log(students[0])

 //Crie um novo student e coloque na posiçao 1 do Array students

 const jhon = {
     name: "Jhon",
     age: 23,
     weight: 74.8,
     isSubscribed: true,
 }
 students = [
     student,
     jhon
 ]
 students[1] = jhon
 console.log(students)

/*
Sem rodar o codigo, qual é a resposta do codigo abaixo  e por que? Apos 
sua resposta, rode o codigo  e veja se voce acertou.

    console.log(a)
    var a = 1

*/
console.log(a)
    var a = 1
