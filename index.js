const { ApolloServer } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const { resolvers } = require("./src/graphql/resolvers");
const { typeDefs } = require("./src/graphql/typeDefs");
const { data } = require("./src/data");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    db: data,
  },
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const PORT = 4000;

try {
  server.listen(PORT, () => {
    console.log(
      `🚀 Query endpoint ready at http://localhost:${PORT}${server.graphqlPath}`
    );
  });

  console.log(`server ==> HERŞEY YOLUNDA`);
} catch (error) {
  console.log("Apollo server error !!!!!! ");
  throw new Error(error);
}
