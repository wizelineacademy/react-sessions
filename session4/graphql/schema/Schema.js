const { GraphQLSchema } = require('graphql');

const QueryType = require('./QueryType');

module.exports = new GraphQLSchema({
  query: QueryType
});
