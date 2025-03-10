import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";
import { sequelize } from "./models";

async function startServer() {
  const app: any = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
  });

  await server.start();

  server.applyMiddleware({ app });

  app.listen({ port: 9000 }, () => {
    console.log(`Server ready at http://localhost:9000${server.graphqlPath}`);
  });

  sequelize
    .authenticate()
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log("Error " + err);
    });
}

startServer();
