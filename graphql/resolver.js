const pokemonData = require('./pokemon.json');

const resolvers = {
  Query: {
    pokemons: () => pokemonData,
    pokemon: (_, args) => pokemonData.find(pokemon => pokemon.id === args.id),
  },
  Pokemon: {
    nameWithId: args => `${args.name} ${args.id}`,
  },
};

module.exports = resolvers;
