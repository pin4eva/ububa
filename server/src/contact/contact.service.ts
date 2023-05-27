import { CreateContactInput } from "./contact.dto";
import { ContactMessageSchema } from "./contact.schema";

export class ContactService {
  async getContacts() {
    try {
      const contacts = await ContactMessageSchema.find();
      return contacts;
    } catch (error) {
      throw new Error(error);
    }
  }
  async createContact(input: CreateContactInput) {
    try {
      const contactModel = await ContactMessageSchema.create(input);
      return contactModel;
    } catch (error) {
      throw new Error(error);
    }
  }
}
