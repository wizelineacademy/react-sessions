const pokemonData = require('./pokemon.json');

const resolvers = {
  Query: {
    pokemons: () => pokemonData,
    pokemon: (_, args) => pokemonData.find(pokemon => pokemon.id === args.id),
  },
  Pokemon: {
    nameWithId: args => `${args.name} ${args.id}`,
    image: args =>
      `https://pokeres.bastionbot.org/images/pokemon/${parseInt(args.id)}.png`,
  },
};

module.exports = resolvers;
