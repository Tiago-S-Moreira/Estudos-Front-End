const { Http2ServerRequest } = require('http2')
const http =  require('https')
const API = 'http://jsonplaceholder.typicode.com/users?_limit=2'
https.get(API, res => {
    console.log(res.statusCode)
})
console.log('conectando API')

// resultado, ele busca primeiro o conectando API,
// pois o res.Statuscode precisa de uma resposta do json antes de executar.