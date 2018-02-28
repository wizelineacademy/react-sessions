const {
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

const PokemonType = new GraphQLObjectType({
  name: 'Pokemon',
  description: 'Pocket monster',
  fields: () => ({
    name: { type: GraphQLString },
  })
});

module.exports = PokemonType;
