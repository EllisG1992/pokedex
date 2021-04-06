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

for (let i = 0; i < pokemonList.length; i++){
  let pokemon = pokemonList[i];

  let message = `${pokemon.name} (height: ${pokemon.height})`;

  if(pokemon.height > 1.5){
    message = message + ' Wow, that\'s big!';
  }

  document.write(message);
  document.write('<br><br>');
}
