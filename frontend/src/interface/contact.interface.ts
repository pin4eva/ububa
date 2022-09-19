export interface IContact {
	id: string;
	name: string;
	email: string;
	message: string;
}

export interface CreateContactInput {
	name: string;
	email: string;
	message: string;
}
