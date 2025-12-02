"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import ContactForm from "./ContactForm";
import { siteConfig } from "@/utils/site-config";

const contactInfo = [
	{
		icon: MapPin,
		title: "Visit Us",
		content: siteConfig.address,
		link: null,
	},
	{
		icon: Phone,
		title: "Call Us",
		content: siteConfig.phone,
		link: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
	},
	{
		icon: Mail,
		title: "Email Us",
		content: siteConfig.email,
		link: `mailto:${siteConfig.email}`,
	},
];

export default function ContactSection() {
	return (
		<section id="contact-us" className="py-32 relative overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
			<div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
			<div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200/30 rounded-full blur-3xl" />

			<div className="container-main relative z-10">
				{/* Header */}
				<div className="text-center mb-16" data-aos="fade-up">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 font-semibold text-sm mb-4">
						<Send className="w-4 h-4" />
						<span>Get In Touch</span>
					</div>
					<h2 className="section-title mt-4">
						We&apos;d Love to Hear From You
					</h2>
					<p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
						Have a project in mind or want to learn more about our services?
						Drop us a message.
					</p>
				</div>

				<div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
					{/* Contact Info & Map */}
					<div className="lg:col-span-2 space-y-8">
						{/* Contact Cards */}
						<div className="space-y-4">
							{contactInfo.map((info, index) => (
								<div
									key={info.title}
									className="group p-6 rounded-2xl bg-white shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100 hover:border-primary-200"
									data-aos="fade-right"
									data-aos-delay={index * 100}
								>
									<div className="flex items-start gap-4">
										<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
											<info.icon className="w-6 h-6 text-white" />
										</div>
										<div className="flex-1">
											<h4 className="font-semibold text-primary-900 mb-2">
												{info.title}
											</h4>
											{info.link ? (
												<Link
													href={info.link}
													className="text-gray-600 hover:text-primary-600 transition-colors break-all"
												>
													{info.content}
												</Link>
											) : (
												<p className="text-gray-600">{info.content}</p>
											)}
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Google Map */}
						<div
							className="rounded-2xl overflow-hidden shadow-hard h-72 border-4 border-white"
							data-aos="fade-right"
							data-aos-delay="300"
						>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.4667677297858!2d7.0300656572127425!3d4.860912785864461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d38495de7af1%3A0xe105140708574a41!2sGourmet%20Spanish%20Supermarket!5e0!3m2!1sen!2sng!4v1663574022010!5m2!1sen!2sng"
								width="100%"
								height="100%"
								loading="lazy"
								className="border-0"
								title="Ububa Technology Location"
							/>
						</div>
					</div>

					{/* Contact Form */}
					<div
						className="lg:col-span-3"
						data-aos="fade-left"
						data-aos-delay="200"
					>
						<div className="gradient-border">
							<div className="gradient-border-content p-8 md:p-10">
								<h3 className="text-2xl font-bold text-primary-900 mb-2">
									Send Us a Message
								</h3>
								<p className="text-gray-600 mb-8">
									Fill out the form below and we&apos;ll get back to you
									shortly.
								</p>
								<ContactForm />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
