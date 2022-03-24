/*
when clicking on the pokemon on the list, we have to hide the open card and show the card which corresponds the one tha t was selected.

To do this, we'll  need to manipulate two elements
1-the list
2-the pokemon card

we need to create two JS variables in order to work with the elements on the screen

we'll need to work with the on click event made by the user on the list

-remove the class open on the open card
-when click in on pokemon listed get the id to know whick card show
-remove the class active wick highlights the selected pokemon on the list
-add the class active on the selected pokemon on the list
*/

const listSelectedPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.card-pokemon')

listSelectedPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () =>{
        const openedPokemonCard = document.querySelector('.open')
        openedPokemonCard.classList.remove('open')

        const idSelectedPokemon = pokemon.attributes.id.value

        const idSelectedCardToOpen = 'card-'+ idSelectedPokemon
        
        const pokemonCardToOpen = document.getElementById(idSelectedCardToOpen)
        pokemonCardToOpen.classList.add('open')

        const selectedPokemonOnList = document.querySelector('.active')
        selectedPokemonOnList.classList.remove('active')

        const newPokemonActiveOnList = document.getElementById(idSelectedPokemon)
        newPokemonActiveOnList.classList.add('active')

        
    })
})
