const {
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

const PokemonType = new GraphQLObjectType({
  name: 'Pokemon',
  description: 'Pocket monster',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'the name of the pokemon'
    },
    weight: {
      type: GraphQLString,
      description: 'the weight of the pokemon',
      resolve: (pokemon, args) =>
        pokemon.weight.maximum,
    },
  })
});

module.exports = PokemonType;
