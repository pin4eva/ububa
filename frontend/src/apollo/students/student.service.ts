import errorHandler from "utils/gql-error-handler";
import { CreateStudentInput, UpdateStudentInput } from "./student.dto";
import { StudentModel } from "./student.schema";

export class StudentService {
	// create student
	async createStudent(input: CreateStudentInput) {
		try {
			const student = new StudentModel(input);
			await student.save();
			return student;
		} catch (error) {
			errorHandler(error);
		}
	}
	// update student
	async updateStudent(input: UpdateStudentInput) {
		try {
			const student = await StudentModel.findById(input.id);
			if (!student) throw new Error("Student do not exist");
			Object.assign(student);
			await student.save();
			return student;
		} catch (error) {
			errorHandler(error);
		}
	}
	// delete student
	async deleteStudent(id: String) {
		try {
			const student = await StudentModel.findById(id);
			if (!student) throw new Error("Student do not exist");
			return student;
		} catch (error) {
			errorHandler(error);
		}
	}
}
