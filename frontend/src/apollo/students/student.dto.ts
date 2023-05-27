import { Field } from "type-graphql";

export class CreateStudentInput {
	@Field()
	name: string;
	@Field()
	email: string;
	@Field()
	location: string;
	@Field()
	course: string;
	@Field()
	gender: string;
	@Field()
	dob: string;
}

export class UpdateStudentInput {
	@Field()
	id: string;
	@Field({ nullable: true })
	name: string;
	@Field({ nullable: true })
	email: string;
	@Field({ nullable: true })
	location: string;
	@Field({ nullable: true })
	course: string;
	@Field({ nullable: true })
	gender: string;
	@Field({ nullable: true })
	dob: string;
}
