// Estrutura de repetição
// for

// for(inicialização de uma variavel; condição de continuação para o loop; expressão final)

for(let i = 10; i > 0; i--) {
    if(i === 5) {
        continue;
    }
    console.log(i)
}

// while

let i = 0;
while(i < 10) {
    console.log(i)

    i++;
}

// for  of

let name = 'Tiago'
let names = ['João', 'Paulo', 'Pedro']

for(let name of names){
    console.log(name)
}

// for in

let person = {
    name: 'Jhon',
    age: 30,
    weight: 88.6
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}