let pokemonList = [
  {
    name: 'Bulbasaur',
    height: 0.7,
    types: ['grass','poison']
  },
  {
    name: 'Charmeleon',
    height: 1.1,
    types: ['fire']
  },
  {
    name: 'Blastoise',
    height: 1.6,
    types: ['water']
  }
];

pokemonList.forEach(function(pokemon){
  console.log(pokemon.name + ' is ' + pokemon.height + ' m tall and has type(s): ' + pokemon.types);
});
