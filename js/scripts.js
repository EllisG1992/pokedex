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

  function addListItem(pokemon){
    let unorderedList = document.querySelector('.pokemon-list');


    let listItem = document.createElement('li');


    let button = document.createElement('button');
    button.innerText = pokemon.name;

    button.addEventListener('click', function (event) {
      showDetails(pokemon.name);
    });

    button.classList.add('button-class');
    listItem.appendChild(button);
    unorderedList.appendChild(listItem);
  }

  function showDetails(pokemon){
    console.log(pokemon);
  }

  return{
    getAll: getAll,
    add: add,
    addListItem: addListItem
  };
})();

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);

});
