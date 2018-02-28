const {
  GraphQLObjectType,
  GraphQLList,
} = require('graphql');

const PokemonType = require('./PokemonType');

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Main query object',
  fields: () => ({
    pokemons: {
      type: GraphQLList(PokemonType),
      resolve: () => [],
    },
  }),
});

module.exports = QueryType;
