import { getinfo } from "./scripts/process.js";
import {printPokemons} from "./scripts/ui.js";
import {printPokemonprincipal} from "./scripts/ui.js";
import {printPokemonselegidos} from "./scripts/ui.js";
import { btnSearch, handleSearch} from "./scripts/ui.js";

btnSearch.addEventListener('click', handleSearch);



const mainFuntion= async () => {
    let data = await getinfo();
    printPokemons(data);
}

mainFuntion();

const mainFuntion2= async () => {
    let data = await getinfo();
    printPokemonprincipal(data);
}

mainFuntion2();


