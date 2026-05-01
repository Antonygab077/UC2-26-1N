const ask = require(`readline-sync`)

function criarUsuario(name1, age, city, hobbies){
    return [name1, age, city, hobbies]
}

function formatarHobbies(hobbies){
    return hobbies.join(", ")
}

function gerarDescricao(usuario){
    return `${usuario[0]} tem ${usuario[1]} anos, mora em ${usuario[2]} e gosta de: ${formatarHobbies(usuario[3])}`
}

function adicionarUsuario(usuarios, usuario){
    let userAtualizado = [...usuarios, usuario]
    return userAtualizado
}

function gerarRelatorio(usuarios){
    return usuarios.length
}

let questionName = ask.question(`Insira seu nome: `)
let questionAge = Number(ask.question(`Insira sua idade: `))
let questionCity = ask.question(`Insira sua cidade: `)
let questionHobbie1 = ask.question(`Insira seu primeiro hobbie: `)
let questionHobbie2 = ask.question(`Insira seu segundo hobbie: `)
let questionHobbie3 = ask.question(`Insira seu terceiro hobbie: `)
let user1 = criarUsuario(questionName, questionAge, questionCity, [questionHobbie1, questionHobbie2, questionHobbie3])

let usuarios = []

console.log(user1)
console.log(formatarHobbies(user1[3]))
console.log(gerarDescricao(user1))
usuarios = adicionarUsuario(usuarios, user1)
console.log(gerarRelatorio(usuarios))
