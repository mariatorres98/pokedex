const containerPokemons = document.getElementById('container');
const containerPokemon2 = document.getElementById('container2');

export const printPokemons = (listPokemons) => { 
    
    containerPokemons.innerHTML ='';
    listPokemons.forEach(async(pokemon,index) => {
        console.log(pokemon)
        const {data:{sprites}} = await axios.get(pokemon.url);
        if(index<4){
        containerPokemons.innerHTML +=`
        <span class="pokemon">
            <section id="container" >
            <button id="click">
            <figure>
                <img src="${sprites.other.home.front_default}" name="${pokemon.url}" class="contenedorcito" alt="">
            </figure>
            </button>
            </section>
        </span> 
       `}
    });
}


//pintar pokemon principal

export const printPokemonprincipal = (listPokemons) => { 
    
    containerPokemon2.innerHTML ='';
    listPokemons.forEach(async(pokemon,index) => {
        if (index<1){
        const {data:{sprites},data:{abilities},data:{types},data:{height},data:{order},data:{weight},data:{base_experience}} = await axios.get(pokemon.url);
        containerPokemon2.innerHTML +=`
        <main id="container2">
        <section class="charizard-container">
            <div class="title">
                
                <h2>${pokemon.name}</h2>
            </div>
            <figure class="image-charizard">
                <img src="${sprites.other.home.front_default}" alt="chaizard">
            </figure>
        </section>
        <article class="info-pokemon">
            <div class="row-info">
                <div class="row-item">
                    <span class="title-info">No.</span>
                    <span class="info-text">${order}</span>
                </div>
                <div class="row-item">
                    <span class="title-info">LEVEL</span>
                    <span class="info-text">${base_experience}</span>
                </div>
            </div>
            <div class="row-info">
                <div class="row-item">
                    <span class="title-info">TYPE</span>
                    <span class="info-text">${types[0].type.name}</span>
                </div>
                <div class="row-item">
                    <span class="title-info">HABILITY</span>
                    <span class="info-text">${abilities[0].ability.name}</span>
                </div>
            </div>
            <div class="row-info">
                <div class="row-item">
                    <span class="title-info">HEIGHT</span>
                    <span class="info-text">${height} Metros</span>
                </div>
                <div class="row-item">
                    <span class="title-info">WEIGHT</span>
                    <span class="info-text">${weight} kg</span>
                </div>
            </div>
        </article>
       `}
    });
}

//TARGET
document.addEventListener('click',({target})=>{
    if (target.classList.contains('contenedorcito')){
        let x = target.name;
        console.log(x);
        printPokemonselegidos(x);
        // console.log(target.getAttribute('name'));
    } 
})



export const printPokemonselegidos = async (listPokemons) => { 
    let perdirData = await axios.get(listPokemons);
    console.log(perdirData.data);
    containerPokemon2.innerHTML ='';
        containerPokemon2.innerHTML +=`
        <main id="container2">
        <section class="charizard-container">
            <div class="title">
                
                <h2>${perdirData.data.name}</h2>
            </div>
            <figure class="image-charizard">
                <img src="${perdirData.data.sprites.other.home.front_default}" alt="chaizard">
            </figure>
        </section>
        <article class="info-pokemon">
            <div class="row-info">
                <div class="row-item">
                    <span class="title-info">No.</span>
                    <span class="info-text">${perdirData.data.order}</span>
                </div>
                <div class="row-item">
                    <span class="title-info">LEVEL</span>
                    <span class="info-text">${perdirData.data.base_experience}</span>
                </div>
            </div>
            <div class="row-info">
                <div class="row-item">
                    <span class="title-info">TYPE</span>
                    <span class="info-text">${perdirData.data.types[0].type.name}</span>
                </div>
                <div class="row-item">
                    <span class="title-info">HABILITY</span>
                    <span class="info-text">${perdirData.data.abilities[0].ability.name}</span>
                </div>
            </div>
            <div class="row-info">
                <div class="row-item">
                    <span class="title-info">HEIGHT</span>
                    <span class="info-text">${perdirData.data.height} Metros</span>
                </div>
                <div class="row-item">
                    <span class="title-info">WEIGHT</span>
                    <span class="info-text">${perdirData.data.weight} kg</span>
                </div>
            </div>
        </article>
       `
    
}