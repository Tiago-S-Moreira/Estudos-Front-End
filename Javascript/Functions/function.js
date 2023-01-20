//criar um aplicativo de frase motivacionais

//declaration - declaraçao de funçao
//function statement
function createPhrases () {
    console.log('Estudar é muito bom')
    console.log('Paciência e persistência')
    console.log('Revisão é mãe do aprendizado')
}
//executar a funçao
//rodar, chamar, invocar
// execute, run, call, invoke
createPhrases()

// function scope

let subject = 'create video'
 
function createThink(subject){
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject))

// function hoisting

sayMyName();

function sayMyName(){
    console.log('Tiago')
}

// arrow function

const sayMyName = (name) => {
    console.log(name)
}

sayMyName('Tiago')

// callback function

function sayMyName(name){
    console.log(name)
}
sayMyName(
    () => { 
        console.log(`estou em uma callback`)
    }
)
 /*
    Function() constructor

    expressao new
    criar um novo objeto
    this keyword
 */

function Person(){
    this.name = name
}
const Tiago = new Person("Tiago")
const Joao =  new Person("Joao")
console.log(Tiago)
console.log(Joao)