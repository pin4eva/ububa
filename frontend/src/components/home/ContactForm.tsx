import { apollo } from "apollo";
import { CREATE_CONTACT } from "apollo/queries/contact.query";
import { servicesData } from "data/services.data";
import { CreateContactInput } from "interface/contact.interface";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
const ContactForm: React.FC<{ revealPayload: boolean }> = ({
	revealPayload,
}) => {
	const { register, handleSubmit } = useForm<CreateContactInput>();

	const onSubmit: SubmitHandler<CreateContactInput> = async (input) => {
		try {
			const { data } = await apollo.mutate({
				mutation: CREATE_CONTACT,
				variables: { input },
			});
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<form className="container" onSubmit={handleSubmit(onSubmit)}>
			{
				<select required style={{ display: revealPayload ? "block" : "none" }}>
					<option style={{ color: "gray" }}>Select Needed Service</option>
					{Object.values(servicesData).map((elem) => (
						<option key={elem.id}>{elem.productTitle}</option>
					))}
				</select>
			}
			<div className="form-group">
				<input
					{...register("name", { required: true, minLength: 5 })}
					type="text"
					name="name"
					placeholder="Name"
				/>
			</div>
			<div className="form-group">
				<input
					type="email"
					{...register("email", { required: true, minLength: 5 })}
					name="email"
					placeholder="Email"
				/>
			</div>
			<div className="form-group">
				<textarea
					cols={10}
					rows={5}
					{...register("message", { required: true, minLength: 5 })}
					placeholder="Kindly give us a brief description of your project needs"
				></textarea>
			</div>
			<div className="text-end">
				<button className="btn-sm">Submit</button>
			</div>
		</form>
	);
};

export default ContactForm;
