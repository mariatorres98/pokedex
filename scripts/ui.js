const containerPokemons = document.getElementById('container');

export const printPokemons = (listPokemons) => { 
    
    containerPokemons.innerHTML ='';
    listPokemons.forEach(async(pokemon,index) => {
        
        const {data:{sprites}} = await axios.get(pokemon.url);
        if(index<4){
        containerPokemons.innerHTML +=`
        <span class="pokemon">
            <section id="container">
            <figure>
                <img src="${sprites.other.home.front_default}" alt="">
            </figure>
            </section>
        </span> 
       `}
    });
};

const input = document.getElementById('search');
export const btnSearch = document.getElementById('btnSearch');


const filterArray = async (word) => {
    const URL='https://pokeapi.co/api/v2/pokemon/';
    const { data : {results} } = await axios.get(URL);
    const searchFilter = results.filter(results => results.name.toLowerCase().includes(word.toLowerCase()));
    console.log(searchFilter);
    printPokemons(searchFilter);
};

export const handleSearch = () => {
    let searchType = input.value;
    filterArray(searchType);
    
}


