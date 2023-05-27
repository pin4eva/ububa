import { IsEmail, IsString } from "class-validator";
import { InputType, Field } from "type-graphql";

@InputType()
export class CreateContactInput {
  @IsString()
  @Field()
  name: string;
  @IsEmail()
  @Field()
  email: string;
  @IsString()
  @Field()
  message: string;
}
