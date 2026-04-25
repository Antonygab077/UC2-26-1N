/*
function imprimirOlaMundo() {
    console.log(`Ola mundo`)
}
imprimirOlaMundo()

function calcularArea (altura, largura){
    const area = altura * largura
    console.log(area)
}
calcularArea(2,3)
calcularArea(2,4)

function names(name){
    console.log(`Ola ${name}`)
}
names(`Antony`)
names(`Emanuel`)
names(`Erick`)

function testeVariavel(){
    let numero = 5
    console.log(numero)
}
testeVariavel()

let variavelGlobal = `esta eh a variavel global`

function funcao1(){
    let variavelLocal = `esta eh a variavel local`
    console.log(variavelGlobal)
    console.log(variavelLocal)
}
funcao1()

function calculaArea(altura, largura){
    const area = altura * largura
    return area
}
console.log(calculaArea(5,8))

let areaCalculada = calculaArea(7,9)
console.log(areaCalculada > 60)

function exercicio3(firstNumber, secondNumber){
    let sum = firstNumber + secondNumber
    return sum
}
let result = exercicio3(2, 1)
console.log(result)
*/

function exercicio4(){
    let arrayNumbers = [4, 8, 12, 16]
    let first = arrayNumbers[0] / 2
    let second = arrayNumbers[arrayNumbers.length - 1] / 2
    return [first, second]
}

console.log(exercicio4())
