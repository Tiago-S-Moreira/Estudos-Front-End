// obter o dobro de numeros positivos

const numbers = [-10, 0, 2, 4];

//const dbPos = numbers.filter(n => n > 0).map(n => n * 2);

const dbPos = numbers.reduce((myArr, cNumber) => {
    if(cNumber > 0){
        myArr.push(cNumber * 2)
    }
    return myArr
}, [])
console.log(dbPos)