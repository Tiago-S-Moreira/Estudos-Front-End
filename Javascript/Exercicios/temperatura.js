/*
    Celsius para Fahrenheit

        Crie uma funçao que receba uma string em celsius ou farenheit e faça~
        a transformação de uma unidade para outra

        C = (F - 32) * 5/9

        F = C * 9/5 + 32
        
*/

function transformDegree(degree){
    const celsiusExiste = degree.toUpperCase().includes('C')
    const fahrenheitExiste = degree.toUpperCase().includes('F')

    //Fluxo de erro
    if(!celsiusExiste && !fahrenheitExiste) {
        throw new Error ('Grau não identificado')
    }

    //Fluxo ideal
    var updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    var formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    var degreeSign = 'C'

    //Fluxo alternativo
    if(celsiusExiste){
         updatedDegree = Number(degree.toUpperCase().replace("C", ""));
         formula = celsius => celsius * 9/5 + 32
         degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
}

try{
    console.log(transformDegree('58F'))
    console.log(transformDegree('58C'))
    transformDegree('50Z')
}catch (error) {
    console.log(error.message)
}