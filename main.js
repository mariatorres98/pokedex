import { getinfo } from "./scripts/process.js";
import {printPokemons} from "./scripts/ui.js";
import {printPokemonprincipal} from "./scripts/ui.js";
import {printPokemonselegidos} from "./scripts/ui.js";


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


