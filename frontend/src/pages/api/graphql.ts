import { ApolloServer } from "apollo-server-micro";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { schema } from "../../apollo/typeDefs/index.type";
import Cors from "cors";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const apolloServer = new ApolloServer({
	schema,
	plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});

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
// function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
// 	return new Promise((resolve, reject) => {
// 		fn(req, res, (result: any) => {
// 			if (result instanceof Error) {
// 				return reject(result);
// 			}

// 			return resolve(result);
// 		});
// 	});
// }

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

	// connect database

	// start server
	await startServer;

	apolloServer.createHandler({ path: "/api/graphql" })(req, res);
}
