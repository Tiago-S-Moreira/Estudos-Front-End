// contador de nomes por inciais

const names = ["Daniel", "Maria", "Marta", "Juca", "João", "Jéssica"]

const initialNames = names.reduce((count, nomeAtual) => {
    const firstLetter = nomeAtual[0].toLowerCase()
    if(count[firstLetter]){
        count[firstLetter]++
    }else{
        count[firstLetter] = 1
    }
    return count
}, {});

console.log(initialNames);