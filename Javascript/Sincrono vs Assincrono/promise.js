/*Promise

É um objeto Javascript com a promessa de que algo será realizado.Javascript.
É usado para operações assincronas
    Carregar um arquivo
    Leitura de dados de uma API.

Uma promossa poderá ser:

    Pending: Estado inicial, assim que o Objeto da promessa é iniciado.
    FulFilled: A promessa foi concluida com sucesso.
    Rejected: A promesssa foi rejeitada, houve um erro.
    Settled: Seja com sucesso ou com erro, ela foi finalmente concluida.
    */

    let aceitar =  true

    console.log('pedir uber')

    const promessa = new Promise((resolve, reject) => {
        if(aceitar){
            return resolve ('pedido aceito!')
        }
        return reject ('pedido negado!')
    })

    promessa
        .then(result => console.log(result))
        .catch(erro => console.log(erro))
        .finally(() => console.log('finalizada'))

        console.log('aguardando')
