"use client";

import { TestimonialsData } from "@/data/testimonials.data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { Quote, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function TestimonialsSection() {
	return (
		<section className="py-32 relative overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-secondary-950" />

			{/* Animated Background Elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-20 left-10 w-64 h-64 bg-secondary-500/20 rounded-full blur-3xl animate-float" />
				<div
					className="absolute bottom-20 right-10 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl animate-float"
					style={{ animationDelay: "2s" }}
				/>
			</div>

			{/* Pattern Overlay */}
			<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

			<div className="container-main relative z-10">
				{/* Header */}
				<div className="text-center mb-16" data-aos="fade-up">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm mb-4">
						<Star className="w-4 h-4 text-secondary-400" />
						<span>Testimonials</span>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
						What Our Clients Say
					</h2>
					<p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
						Don&apos;t just take our word for it - hear from some of our
						satisfied clients
					</p>
				</div>

				{/* Testimonials Slider */}
				<Swiper
					modules={[Autoplay, Pagination, Navigation]}
					spaceBetween={30}
					slidesPerView={1}
					pagination={{
						clickable: true,
						dynamicBullets: true,
					}}
					navigation={true}
					loop={true}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						768: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
						},
					}}
					className="!pb-16"
				>
					{TestimonialsData.map((testimony) => (
						<SwiperSlide key={testimony.id}>
							<div className="group h-full">
								{/* Card */}
								<div className="relative h-full glass-effect-dark rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-hard">
									{/* Quote Icon */}
									<div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center shadow-glow-secondary transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
										<Quote className="w-8 h-8 text-white" />
									</div>

									{/* Rating Stars */}
									<div className="flex gap-1 mb-6 pt-8">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className="w-5 h-5 fill-secondary-400 text-secondary-400"
											/>
										))}
									</div>

									{/* Testimonial Text */}
									<p className="text-gray-200 leading-relaxed mb-8 min-h-[120px]">
										&ldquo;{testimony.testimony}&rdquo;
									</p>

									{/* Author Info */}
									<div className="flex items-center gap-4 pt-6 border-t border-white/10">
										<div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-secondary-400 flex-shrink-0">
											<Image
												src={testimony.image}
												alt={testimony.name}
												fill
												className="object-cover"
											/>
										</div>
										<div>
											<p className="font-semibold text-white text-lg">
												{testimony.name}
											</p>
											<p className="text-gray-400 text-sm">
												{testimony.occupation}
											</p>
										</div>
									</div>

									{/* Hover Gradient */}
									<div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
