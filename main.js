import { btnSearch, handleSearch, printPokemons } from "./scripts/ui.js";

btnSearch.addEventListener('click', handleSearch);


import { getinfo } from "./scripts/process.js";

const mainFuntion= async () => {
    let data = await getinfo();
    printPokemons(data);
}

mainFuntion();
