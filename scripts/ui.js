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
};

const input = document.getElementById('search');
export const btnSearch = document.getElementById('btnSearch');

const filterArray = async (word) => {
    const URL='https://pokeapi.co/api/v2/pokemon/';
    const { data : {results} } = await axios.get(URL);
    const searchFilter = results.filter(results => results.name.toLowerCase().includes(word.toLowerCase()));
    console.log(searchFilter);
};

export const handleSearch = () => {
    let searchType = input.value;
    filterArray(searchType);
}


