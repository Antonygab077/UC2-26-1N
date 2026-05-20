const movie = {
    direction: `Wes Ball`,
    title: `Maze Runner`,
    launch: `18th september of 2014`,
    cast: [`Dylan O'Brien`, `Thomas Brodie-Sangster`, `Kaya Scodelario`],
    watched: true,
    description: function () {
        console.log(`
Title: ${this.title}
Realese year: ${this.launch}
Cast:`)
        for (let actor of this.cast) {
            console.log(`- ${actor}`)
        }

        if (this.watched) {
            console.log(`Yes, I Watched`)
        } else (console.log(`No watch`))
    }
}

movie.movieCharacters = [`Thomas`, `Newt`, `Teresa`]

console.clear()
console.log(`
${movie.cast[0]} = ${movie.movieCharacters[0]}
${movie.cast[1]} = ${movie.movieCharacters[1]}
${movie.cast[2]} = ${movie.movieCharacters[2]}
`)

movie.cast[0] = `Xuxa`

console.log(`
${movie.cast[0]} = ${movie.movieCharacters[0]}
${movie.cast[1]} = ${movie.movieCharacters[1]}
${movie.cast[2]} = ${movie.movieCharacters[2]}
`)

movie.description()