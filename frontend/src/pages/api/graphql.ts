import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
// import { schema } from "../../apollo/typeDefs/index.type";
import Cors from "cors";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { buildSchema, Resolver, Query } from "type-graphql";
import { connectDB } from "utils/connectDb";
import { ContactResolver } from "apollo/contact/contact.resolver";
import { resolvers } from "apollo/resolvers";

@Resolver()
class HelloResolver {
	@Query(() => String)
	hello() {
		return "hi";
	}
}

const cors = Cors({
	methods: ["GET", "HEAD", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
	credentials: true,
	origin: [
		"https://studio.apollographql.com",
		"http://localhost:8000",
		"http://localhost:3000",
	],
});

// Middleware to run the cors configuration
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
	return new Promise((resolve, reject) => {
		fn(req, res, (result: any) => {
			if (result instanceof Error) {
				return reject(result);
			}

			return resolve(result);
		});
	});
}

export const schema = await buildSchema({
	resolvers,
	dateScalarMode: "isoDate",
});
const apolloServer = new ApolloServer({
	schema,
	plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
	csrfPrevention: true,
});

export const config = {
	api: {
		bodyParser: false,
	},
};

const startServer = apolloServer.start();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// run middlwares
	await runMiddleware(req, res, cors);
	// connect database
	await connectDB();
	// start server
	await startServer;

	apolloServer.createHandler({ path: "/api/graphql" })(req, res);
}
