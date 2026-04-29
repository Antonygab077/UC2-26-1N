/*
function criarUsuario(nome, idade, cidade, hobbies){
    return [nome, idade, cidade, hobbies]
}

console.log(criarUsuario(`Joao`, 25, `Porto Alegre`, `Musica`))
*/

function formatarHobbies(hobbies){
    let algmcoisa = [`Musica`]
    algmcoisa.join(", ")
    hobbies = algmcoisa

}
console.log(formatarHobbies(`Naosei`))

/*
function gerarDescricao(usuario){
    let array = [`Joao`, 25, `Porto Alegre`, `Musica, Jogos e Futebol`]
    usuario = `${array[0]} tem ${array[1]}, mora em ${array[2]} e gosta de ${array[3]}`
    return usuario
}

console.log(gerarDescricao())

const usuarios1 = []

function adicionarUsuario(usuarios, usuario){
    usuarios1.push(usuarios)
    usuarios1.push(usuario)
    return usuarios1
}
console.log(adicionarUsuario(`Antony`, `Gabriel`))

function gerarRelatorio(usuarios){
    usuarios = `Total de usuarios: ${usuarios1.length}`
    return usuarios
}

console.log(gerarRelatorio())
*/