const containerPokemons = document.getElementById('container');

export const printPokemons = (listPokemons) => {

    containerPokemons.innerHTML ='';
    listPokemons.forEach(async(pokemon) => {
        const {data:{height}} = await axios.get(pokemon.url);
        containerPokemons.innerHTML +=`
        <div class="pokemon">
            <h3>${pokemon.name}</h3>
            <span>altura:${height}</span>
        </div>
       `
    });
}