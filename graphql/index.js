const { GraphQLServer } = require('graphql-yoga');
const  resolvers  = require('./resolver');

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
});

server.start(() => console.log('🚀 Server is running on localhost:4000'));
