/* Async/Await

- Maneira de escrever promessas
- Syntatic Sugar

*/

const promessa = new Promise (function (resolve, reject) {
    return resolve ('result')
})

async function start(){
    try{
        const result = await promessa
        console.log(result)
    }catch(e){
        console.log(e)
    }finally{
        console.log('rodar sempre')
    }
}

start ()