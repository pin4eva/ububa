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
export class Student {
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
	location: string;
	@Field()
	@Prop()
	course: string;
	@Field()
	@Prop()
	gender: string;
	@Field()
	@Prop()
	dob: Date;
}

export const StudentModel = getModelForClass(Student);
