let pokemonList = [
  {name: 'Charizard', height: 1.7, types: ['fire','flying']},
  {name: 'Blastoise', height: 1.6, types: ['water']},
  {name: 'Zapdos', height: 1.6, types: ['electric','flying']}
];

for (let i = 0; i < pokemonList.length; i++){
  document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')');
  document.write('<br><br>');
}
