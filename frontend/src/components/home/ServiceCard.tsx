"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IServicesData } from "@/interface/services.interface";

interface ServiceCardProps {
	service: IServicesData;
	delay?: number;
}

export default function ServiceCard({ service, delay = 0 }: ServiceCardProps) {
	return (
		<div className="group relative" data-aos="fade-up" data-aos-delay={delay}>
			{/* Gradient Border Effect */}
			<div className="absolute -inset-0.5 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />

			{/* Card Content */}
			<div className="relative h-full bg-white rounded-2xl shadow-soft overflow-hidden transition-all duration-500 group-hover:shadow-hard group-hover:-translate-y-2">
				{/* Image Section */}
				<div className="relative h-56 overflow-hidden">
					<Image
						src={service.productImg}
						alt={service.productTitle}
						fill
						className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/40 to-transparent" />

					{/* Floating Badge */}
					<div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-primary-700 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						Learn More
					</div>

					{/* Title Overlay */}
					<div className="absolute bottom-4 left-4 right-4">
						<h4 className="font-bold text-white text-xl leading-tight">
							{service.productTitle}
						</h4>
					</div>
				</div>

				{/* Content Section */}
				<div className="p-6 space-y-4">
					<p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
						{service.productDesc}
					</p>

					{/* CTA Link */}
					<Link
						href="/#contact-us"
						className="group/link inline-flex items-center gap-2 text-primary-600 font-semibold text-sm
                       hover:text-secondary-600 transition-colors duration-200"
					>
						<span>Get Started</span>
						<ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
					</Link>
				</div>

				{/* Hover Gradient Overlay */}
				<div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
			</div>
		</div>
	);
}
