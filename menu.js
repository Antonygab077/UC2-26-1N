const ask = require(`readline-sync`)

while(true) {
    console.clear()
    console.log(`
1 - Mensagem de bom dia
2 - Mensagem de boa tarde
3 - Mensagem de boa noite
0 - Sair
    `)
    
let opcao = Number(ask.question(`Escolha uma opcao: `))

switch(opcao) {
    case 1:
        console.clear()
        console.log(`Bom dia flor do dia`)
        ask.question(`Pressione ENTER para continuar...`)
        break
    case 2:
        console.clear()
        console.log(`Boa tarde do Lohan`)
        ask.question(`Pressione ENTER para continuar...`)
        break
    case 3:
        console.clear()
        console.log(`Bah`)
        ask.question(`Pressione ENTER para continuar...`)
        break
    case 0:
        process.exit()
        break

    default:
        console.log(`Opcao invalida`)
        ask.question(`Pressione ENTER para continuar...`)

    }
}