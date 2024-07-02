"use strict";

const searchInput   = document.getElementById("search-input"   );               
const searchButton  = document.getElementById("search-button"  );                
const pokemonName   = document.getElementById("pokemon-name"   );               
const pokemonId     = document.getElementById("pokemon-id"     );
const weight        = document.getElementById("weight"         );           
const height        = document.getElementById("height"         );           
const types         = document.getElementById("types"          );       
const hp            = document.getElementById("hp"             );       
const attack        = document.getElementById("attack"         );           
const defense       = document.getElementById("defense"        );           
const specialAttack = document.getElementById("special-attack" );                   
const specialDefense= document.getElementById("special-defense");                   
const speed         = document.getElementById("speed"          );       
const sprite        = document.getElementById("img-container");   

const pokemonTypes = [
    ["Fire",      "rgba(255, 165, 106, 1)"],
    ["Water",     "rgba(148, 194, 255, 1)"],
    ["Electric",  "rgba(253, 242, 92, 1)"],
    ["Grass",     "rgba(149, 238, 154, 1)"],
    ["ICE",       "rgba(208, 230, 243, 1)"],
    ["Fighting",  "rgba(143, 71, 71, 1)"],
    ["Poison",    "rgba(155, 65, 121, 1)"],
    ["Ground",    "rgba(73, 57, 52, 1)"],
    ["Flying",    "rgba(186, 231, 212, 1)"],
    ["Psychic",   "rgba(231, 156, 212, 1)"],
    ["Bug",       "rgba(133, 135, 248, 1)"],
    ["Rock",      "rgba(170, 170, 170, 1)"],
    ["Ghost",     "rgba(224, 215, 215, 1)"],
    ["Dragon",    "rgba(83, 46, 77, 1)"],
    ["Dark",      "rgba(54, 9, 75, 1)"],
    ["Steel",     "rgba(124, 123, 151, 1)"],
    ["Fairy",     "rgba(230, 150, 219, 1)"]
]

searchButton.addEventListener("click", searchPokemon);

function searchPokemon(event) {
    event.preventDefault();
    console.log(searchInput.value);
    const pokemonNames = fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${cleanInput(searchInput.value)}`)
                        .then(res => res.json())
                        .then(data => displayPokemon(data))
                        .catch(err=>alert(`Pokémon not found`))
                        ;
    
}


function displayPokemon(pokemonObject) {
    clearSearch();
    console.log(pokemonObject);
    sprite.innerHTML = `<img id="sprite" src="${pokemonObject.sprites.front_default}" alt="Pokemon Sprite">`;
    
    pokemonName   .style.display = 'inline-block'               
    pokemonId     .style.display = 'inline-block'               
    height        .style.display = 'inline-block'           
    weight        .style.display = 'inline-block'         

    pokemonName   .innerText = `${(pokemonObject.name).toUpperCase()}`
    pokemonId      .innerText   = `#${(pokemonObject.id)}`
    height        .innerText = `Height: ${pokemonObject.height}`           
    weight        .innerText = `Weight: ${pokemonObject.weight}`           

    console.log("pokemon types : ",pokemonObject.types.length);
    
    pokemonObject.types.forEach(element => {
        const color = pokemonTypes.find(types => types[0].toLowerCase() === element.type.name)[1];
        console.log(color);
        types.innerHTML += `<span style="display: inline-block; 
        background-color: ${color};">${element.type.name.toUpperCase()}</span>`;      
        console.log(element.type.name);
    });

    
    hp            .innerText = pokemonObject.stats[0].base_stat;       
    attack        .innerText = pokemonObject.stats[1].base_stat;           
    defense       .innerText = pokemonObject.stats[2].base_stat;           
    specialAttack .innerText = pokemonObject.stats[3].base_stat;                   
    specialDefense.innerText = pokemonObject.stats[4].base_stat;                   
    speed         .innerText = pokemonObject.stats[5].base_stat;       
    
}


function cleanInput(input){
    let cleanInput = input.toLowerCase();
    cleanInput = cleanInput.trim();
    console.log("Clean input: ", cleanInput);
    return cleanInput;
}

function clearSearch() {
    pokemonName   .innerHTML =``;               
    pokemonId     .innerHTML =``;
    weight        .innerHTML =``;           
    height        .innerHTML =``;           
    types         .innerHTML =``;       
    hp            .innerHTML =``;       
    attack        .innerHTML =``;           
    defense       .innerHTML =``;           
    specialAttack .innerHTML =``;                   
    specialDefense.innerHTML =``;                   
    speed         .innerHTML =``;       
    sprite        .innerHTML =``;
    
    pokemonName   .style.display = `none`;
    pokemonId     .style.display = `none`;
    weight        .style.display = `none`;
    height        .style.display = `none`;

}




