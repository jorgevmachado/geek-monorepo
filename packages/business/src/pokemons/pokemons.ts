import { Pokemon } from '../api';

export class Pokemons {
    private pokemonApi: Pokemon;
    constructor() {
        this.pokemonApi = new Pokemon();
    }

    public async getList() {
        return this.pokemonApi.getAll(0, 10).then(res => res);
    }
}