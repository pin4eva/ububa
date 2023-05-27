import { Field } from "type-graphql";

export class CreateTraingingInput {
	@Field()
	name: string;
	@Field()
	date: Date;
}
