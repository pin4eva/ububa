import { buildSchema } from "type-graphql";
import * as cors from "cors";
import * as express from "express";
import { ContactRouter } from "./contact/contact.controller";
import { connectDB } from "./db/init-db";
import { config } from "./utils/config";
import { ContactResolver } from "./contact/contact.resolver";
import { ApolloServer } from "apollo-server-express";
import * as path from "path";
import { ObjectIdScalar } from "./utils/objectid-scalar";
import { ObjectId } from "mongodb";
import { createServer } from "http";
import "reflect-metadata";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

(async () => {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;

  app.use(express.json({ limit: "50mb" }));
  app.use(cors({ origin: true }));

  app.get("/", (_, res) => {
    res.send("Welcome");
  });

  app.use("/contact", ContactRouter);
  try {
    const schema = await buildSchema({
      resolvers: [ContactResolver],
      emitSchemaFile: path.resolve(__dirname, "schema.gql"),
      scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
      validate: true,
    });

    const apolloServer = new ApolloServer({
      schema,
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
    });
    await connectDB(config.MONGO_URI);

    const httpServer = createServer(app);
    await apolloServer.start();
    apolloServer.applyMiddleware({ app, path: "/graphql" });
    httpServer.listen({ port: PORT }, () => {
      console.log(`server started on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
