import { gql } from "apollo-server-micro";
import { makeExecutableSchema } from "graphql-tools";
import resolvers from "../resolvers/index.resolver";
import { MessageType } from "./messages.type";

const typeDefs = gql`
	type Query {
		_empty: String
	}

	type Mutation {
		_empty: String
	}
`;

export const schema = makeExecutableSchema({
	typeDefs: [typeDefs, MessageType],
	resolvers,
});
