import { Resolver, Mutation, Query, Arg } from "type-graphql";
import { CreateContactInput } from "./contact.dto";
import { Contact } from "./contact.model";
import { ContactService } from "./contact.service";

@Resolver()
export class ContactResolver {
	constructor(private service: ContactService) {
		this.service = new ContactService();
	}

	@Query(() => [Contact])
	getContacts() {
		return this.service.getContacts();
	}

	@Mutation(() => Contact)
	createContact(@Arg("input") input: CreateContactInput) {
		return this.service.createContact(input);
	}
}
