const pokemonData = require('../pokemon.json');

class PokeAPIClient {
  getPokemonList() {
    return pokemonData;
  }
}

module.exports = PokeAPIClient;
