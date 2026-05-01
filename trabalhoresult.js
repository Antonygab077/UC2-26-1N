function criarUsuario(nome, idade, cidade, hobbies){
    return [nome, idade, cidade, hobbies];
}

function formatarHobbies(hobbies){
    return hobbies.join(", ");
}

function gerarDescricao(usuario){
    return `${usuario[0]}, tem ${usuario[1]} anos, mora em ${usuario[2]} e gosta de ${formatarHobbies(usuario[3])}`
}

function adicionarUsuario(usuarios, usuario){
    let usuarioAtualizado = [...usuarios, usuario]
    return usuarioAtualizado
}

function gerarRelatorio(usuarios){
    return `Total de usuarios: ${usuarios.length}`
}

let = usuarios = [] 

let user1 = criarUsuario(`Antony`, 16, `Sapucaia do Sul`, [`Musica`, `Guitarra`, `Jogar`]);
let user2 = criarUsuario(`Erick`, 20, `Sao leo`, [`Correr`, `Dar tiro`, `Morrer`])

console.log(user1)
console.log(formatarHobbies(user1[3]))
console.log(gerarDescricao(user1))
usuarios = adicionarUsuario(user1, user2)
console.log(gerarRelatorio(usuarios))