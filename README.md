Welcome to pokemoninfo! This is a package where you can get the info of all pokemons!
---

***This is a package simple to use***

```js
const pokemoninfo = require('pokemoninfo');
const data = pokemoninfo.pokemon('pikachu')

data.then(function(result) {
    console.log(result)
})

/*
* Output
{
  name: 'pikachu',
  type: [ 'Electric' ],
  species: [ 'Mouse', 'Pokémon' ],
  abilities: [ 'Static', 'Lightning Rod' ],
  height: '0.4 m (1′04″)',
  weight: '6.0 kg (13.2 lbs)',
  base_experience: '112',
  gender: [ '50% male', '50% female' ],
  stats: {
    hp: '35',
    attack: '55',
    defense: '40',
    sp_atk: '50',
    sp_def: '50',
    speed: '90',
    total: '320'
  family: {
    evolutionStage: 2,
    evolutionLine: [ 'Pichu', 'Pikachu', 'Raichu', 'Raichu' ]
  },
  sprites: {
    normal: 'http://i.some-random-api.ml/pokemon/pikachu.png',
    animated: 'http://i.some-random-api.ml/pokemon/pikachu.gif'
  },
  description: 'When several of these Pokémon gather, their electricity could build and cause lightning storms.',
  generation: '1'
}
/*
```

How to install

```bat
npm i pokemoninfo
```

Discord Support server!
https://discord.gg/vr9DvJc