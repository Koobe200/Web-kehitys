async function fetchdata(url){

    try{
        const response = await fetch(url,);

        if (response.ok){
            const response_data = await response.json();
            return response_data
        } else{
            throw new Error(`HTTP-virhe! Tilakoodi: ${response.status}`)
        }
    }catch (error) {
        console.log(`Virhe datan hakemisessa ${error}`)
    }
}

async function fetchUrl(url){
    console.log(url)
    const pokemonUrl = await fetchdata(url);
    console.log(pokemonUrl)
}

async function createPokemonView(url){
    const pokemonData = await fetchdata(url);
    const pokemonDiv = document.querySelector('#poke-content');
    for (let pokemon of pokemonData.results){
        console.log(pokemon)
        let pokemonText = document.createElement("p");
        pokemonText.textContent = pokemon.name
        pokemonText.addEventListener('click',() => fetchUrl(pokemon.url))
        pokemonDiv.appendChild(pokemonText);
    }
}

createPokemonView('https://pokeapi.co/api/v2/pokemon')

