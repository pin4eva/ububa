import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { CreateContactInput } from "./contact.dto";
import { ContactMessage } from "./contact.schema";
import { ContactService } from "./contact.service";

@Resolver()
export class ContactResolver {
  constructor(private readonly service: ContactService) {
    this.service = new ContactService();
  }

  @Query(() => [ContactMessage])
  async getContactMessage() {
    const data = await this.service.getContacts();

    return data;
  }

  @Mutation(() => ContactMessage)
  createContactMessage(@Arg("input") input: CreateContactInput) {
    return this.service.createContact(input);
  }
}
