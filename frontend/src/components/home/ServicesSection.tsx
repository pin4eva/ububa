import { servicesData } from "@/data/services.data";
import ServiceCard from "./ServiceCard";
import { Zap } from "lucide-react";

export default function ServicesSection() {
	return (
		<section
			id="services"
			className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white"
		>
			{/* Background Decoration */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl" />
				<div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl" />
			</div>

			<div className="container-main relative z-10">
				{/* Section Header */}
				<div className="text-center mb-16" data-aos="fade-up">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 font-semibold text-sm mb-4">
						<Zap className="w-4 h-4" />
						<span>What We Offer</span>
					</div>
					<h2 className="section-title mt-4">Our Services</h2>
					<p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
						Comprehensive solutions to transform your digital vision into
						reality. From development to design, we&apos;ve got you covered.
					</p>
				</div>

				{/* Services Grid - 4 columns for better layout with 8 services */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
					{servicesData.map((service, index) => (
						<ServiceCard
							key={service.id}
							service={service}
							delay={index * 50}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
