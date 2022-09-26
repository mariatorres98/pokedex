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
}
