import {
	Prop,
	getModelForClass,
	ModelOptions,
	Severity,
} from "@typegoose/typegoose";
import { Student } from "apollo/students/student.schema";
import { Types } from "mongoose";
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
export class Training {
	@Field()
	id: string;
	@Field()
	@Prop()
	name: string;
	@Field()
	@Prop()
	date: Date;
	@Prop({ type: [{ type: Types.ObjectId, ref: "Student" }] })
	students: Student[];
}

export const TraingModel = getModelForClass(Training);
