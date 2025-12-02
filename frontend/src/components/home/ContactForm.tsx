"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Send } from "lucide-react";

interface ContactFormData {
	name: string;
	email: string;
	message: string;
}

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting, errors },
	} = useForm<ContactFormData>();

	const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
		try {
			// TODO: Replace with your backend API endpoint when ready
			console.log("Form submitted:", data);
			alert("Thank you for your message! We will respond within 24 hours.");
			reset();
		} catch (error) {
			console.error("Error submitting form:", error);
			alert("There was an error submitting your message. Please try again.");
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
			<div>
				<label
					htmlFor="name"
					className="block text-sm font-medium text-gray-700 mb-1"
				>
					Name
				</label>
				<input
					{...register("name", { required: "Name is required", minLength: 2 })}
					type="text"
					id="name"
					placeholder="Your name"
					className="input-field"
				/>
				{errors.name && (
					<p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
				)}
			</div>

			<div>
				<label
					htmlFor="email"
					className="block text-sm font-medium text-gray-700 mb-1"
				>
					Email
				</label>
				<input
					{...register("email", {
						required: "Email is required",
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: "Invalid email address",
						},
					})}
					type="email"
					id="email"
					placeholder="your@email.com"
					className="input-field"
				/>
				{errors.email && (
					<p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
				)}
			</div>

			<div>
				<label
					htmlFor="message"
					className="block text-sm font-medium text-gray-700 mb-1"
				>
					Message
				</label>
				<textarea
					{...register("message", {
						required: "Message is required",
						minLength: 10,
					})}
					id="message"
					rows={5}
					placeholder="Tell us about your project..."
					className="input-field resize-none"
				/>
				{errors.message && (
					<p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
				)}
			</div>

			<button
				type="submit"
				disabled={isSubmitting}
				className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
			>
				{isSubmitting ? (
					"Sending..."
				) : (
					<>
						Send Message
						<Send className="w-4 h-4" />
					</>
				)}
			</button>
		</form>
	);
}
