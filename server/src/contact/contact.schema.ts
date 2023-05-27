import { getModelForClass, Prop } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ContactMessage {
  @Field(() => String)
  public id: string;
  @Field(() => String)
  @Prop()
  public name: string;
  @Field(() => String)
  @Prop()
  public email: string;
  @Field(() => String)
  @Prop()
  public message: string;
}

export const ContactMessageSchema = getModelForClass(ContactMessage);
