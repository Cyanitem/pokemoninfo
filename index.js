module.exports={
    pokemon: async function(poke) {
        if(!poke) throw new TypeError("No pokemon was specified.")
        const fetch = require("node-fetch");
        try {
        const response = await fetch(`https://some-random-api.ml/pokedex?pokemon=${encodeURIComponent(poke)}`)
        const data = await response.json()
        const info = {
            name: data.name,
            type: data.type, //array
            species: data.species, //array
            abilities: data.abilities, //array
            height: data.height, 
            weight: data.weight,
            base_experience: data.base_experience,
            gender: data.gender, //array
            stats: data.stats, //object
            family: data.family, //object
            sprites: data.sprites, //object
            description: data.description,
            generation: data.generation
            }
            return info
        } catch(err) {
            throw new TypeError("There was an error while executing the function. This is probably because of the pokemon provided was not found.")
        }
    }
}