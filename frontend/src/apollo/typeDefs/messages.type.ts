import { gql } from "@apollo/client";
export const MessageType = gql`
	type Message {
		id: ID
		name: String
	}

	extend type Query {
		getMessages: [Message]
	}

	extend type Mutation {
		createMessage: Message
	}
`;
