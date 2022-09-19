import errorHandler from "utils/gql-error-handler";
import { CreateContactInput, UpdateContactInput } from "./contact.dto";
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

	async updateContact(input: UpdateContactInput): Promise<Contact | undefined> {
		try {
			const contact = await ContactModel.findById(input.id);
			if (!contact) throw new Error("Invalid contact id");
			Object.assign(contact, input);
			await contact.save();
			return contact;
		} catch (error) {
			errorHandler(error);
		}
	}

	async deleteContact(id: string): Promise<Contact | undefined> {
		try {
			const contact = await ContactModel.findById(id);
			if (!contact) throw new Error("Invalid contact id");
			contact.remove();

			return contact;
		} catch (error) {
			errorHandler(error);
		}
	}
}
