import { gql } from "@apollo/client";

export const GET_CONTACTS = gql`
	{
		getContacts {
			id
			name
			email
			message
		}
	}
`;

export const CREATE_CONTACT = gql`
	mutation ($input: CreateContactInput!) {
		createContact(input: $input) {
			id
			name
			email
			message
		}
	}
`;

export const UPDATE_CONTACT = gql`
	mutation ($input: UpdateContactInput!) {
		updateContact(input: $input) {
			id
			name
			email
			message
		}
	}
`;

export const DELETE_CONTACT = gql`
	mutation ($id: String!) {
		deleteContact(id: $id) {
			id
		}
	}
`;
