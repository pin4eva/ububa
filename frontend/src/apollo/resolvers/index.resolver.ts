import { MessageResolver } from "./message.resolver";

const resolvers = {
	Query: { ...MessageResolver.Query },
	Mutation: { ...MessageResolver.Mutation },
};

export default resolvers;
