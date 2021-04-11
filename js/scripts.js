let pokemonRepository = (function (){
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

  function getAll(){
    return pokemonList;
  }

  function add(item){
    pokemonList.push(item);
  }

  return{
    getAll: getAll,
    add: add
  };
})();


pokemonRepository.getAll().forEach(function(pokemon){
  let unorderedList = document.querySelector('.pokemon-list'); //new variable exercise 1.6
  let listItem = document.createElement('li'); //new variable - exercise 1.6
  let button = document.createElement('button'); //new variable exercise 1.6
  button.innerText = pokemon.name;

  button.classList.add('button-class');
  listItem.appendChild(button);
  unorderedList.appendChild(listItem);
  //exercise 1.6 (deleted document.write code)
});
