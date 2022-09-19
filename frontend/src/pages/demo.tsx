import { useQuery } from "@apollo/client";
import { apollo } from "apollo";
import { DELETE_CONTACT, GET_CONTACTS } from "apollo/queries/contact.query";
import FrontLayout from "components/shared/FrontLayout";
import { IContact } from "interface/contact.interface";
import React from "react";
import { useState } from "react";

const Demo = () => {
	const [contacts, setContacts] = useState<IContact[]>([]);
	const { loading } = useQuery(GET_CONTACTS, {
		onCompleted: (data) => setContacts(data.getContacts),
		onError: (error) => console.log(error),
	});

	const deleteContact = async (id: string) => {
		try {
			const { data } = await apollo.mutate({
				mutation: DELETE_CONTACT,
				variables: { id },
			});
			setContacts(contacts.filter((c) => c.id !== id));
		} catch (error) {
			console.log(error);
		}
	};
	if (loading) return <p>loading...</p>;

	return (
		<FrontLayout>
			<div className="container">
				<table className="table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Message</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{contacts?.map((contact) => (
							<tr key={contact?.id}>
								<td>{contact?.name}</td>
								<td>{contact?.email}</td>
								<td>{contact?.message}</td>
								<td>
									<button
										onClick={() => deleteContact(contact.id)}
										className="btn text-danger"
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</FrontLayout>
	);
};

export default Demo;
