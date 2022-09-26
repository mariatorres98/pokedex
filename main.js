import { getinfo } from "./scripts/process.js";
import {printPokemons} from "./scripts/ui.js";



const mainFuntion= async () => {
    let data = await getinfo();
    printPokemons(data);
}

mainFuntion();