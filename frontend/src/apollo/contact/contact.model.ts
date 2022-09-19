import {
	Prop,
	getModelForClass,
	ModelOptions,
	Severity,
} from "@typegoose/typegoose";
import { ObjectType, Field } from "type-graphql";
@ObjectType()
@ModelOptions({
	schemaOptions: {
		timestamps: true,
	},
	options: {
		allowMixed: Severity.ALLOW,
	},
})
export class Contact {
	@Field()
	id: string;
	@Field()
	@Prop()
	name: string;
	@Field()
	@Prop()
	email: string;
	@Field()
	@Prop()
	message: string;
}

export const ContactModel = getModelForClass(Contact);
