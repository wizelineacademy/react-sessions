const pokemonData = require('./pokemon.json');

const resolvers = {
  Query: {
    hello: () => 'Hi Wizeliner from the future, you are using GraphQL',
  },
};

module.exports = resolvers;
