let pokemonList = [
  {name: 'Bulbasaur', height: 0.7, types: ['grass','poison']},
  {name: 'Charmeleon', height: 1.1, types: ['fire']},
  {name: 'Blastoise', height: 1.6, types: ['water']}
];

for (let i = 0; i < pokemonList.length; i++){
  document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')');
  document.write('<br><br>');
}
