const movie = {
    direction: `Wes Ball`,
    title: `Maze Runner`,
    launch: `18th september of 2014`,
    cast: [`Dylan O'Brien`,  `Thomas Brodie-Sangster`, `Kaya Scodelario`],
    watched: true,
    description: function () {
        console.log(`
        Title: ${this.title}
        Realese year: ${this.launch}
        Cast:`)

        for(let actor of this.cast) {
            console.log(`- ${actor}`)
        }
        
        if(this.watched) {
            console.log(`Yes, I Watched`)
        } else (console.log(`No`))
    }
}

movie.description()