import errorHandler from "utils/gql-error-handler";
import { CreateContactInput } from "./contact.dto";
import { Contact, ContactModel } from "./contact.model";

export class ContactService {
	// get contact
	async getContacts(): Promise<Contact[] | undefined> {
		try {
			const contacts = await ContactModel.find();
			return contacts;
		} catch (error) {
			errorHandler(error);
		}
	}
	// create contact
	async createContact(input: CreateContactInput): Promise<Contact | undefined> {
		try {
			const contact = await ContactModel.create(input);
			return contact;
		} catch (error) {
			errorHandler(error);
		}
	}
}
