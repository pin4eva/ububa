import { InputType, Field } from "type-graphql";
import { IsEmail, IsString } from "class-validator";

@InputType()
export class CreateContactInput {
	@Field()
	@IsString()
	name: string;
	@Field()
	@IsEmail()
	email: string;
	@Field()
	@IsString()
	message: string;
}
