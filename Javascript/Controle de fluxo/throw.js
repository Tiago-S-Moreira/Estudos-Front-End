// throw

function sayMyName(name = ''){
    if (name === '') {
        throw 'Nome é obrigatório'
    }
    console.log(name)
}