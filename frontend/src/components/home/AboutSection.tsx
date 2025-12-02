import Image from "next/image";
import Link from "next/link";
import { Target, Users, Award, Zap } from "lucide-react";

const stats = [
	{ icon: Users, value: "500+", label: "Happy Clients" },
	{ icon: Award, value: "150+", label: "Projects Done" },
	{ icon: Target, value: "10+", label: "Team Members" },
	{ icon: Zap, value: "5+", label: "Years Experience" },
];

export default function AboutSection() {
	return (
		<section id="about-us" className="py-32 relative overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/20 to-white" />

			<div className="container-main relative z-10">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Image Side */}
					<div
						className="relative order-2 lg:order-1"
						data-aos="fade-right"
						data-aos-delay="100"
					>
						{/* Main Image */}
						<div className="relative h-[500px] rounded-3xl overflow-hidden shadow-hard">
							<Image
								src="/images/side1.png"
								alt="Team collaboration"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
						</div>

						{/* Floating Stats Card */}
						<div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-hard p-6 max-w-xs">
							<div className="flex items-center gap-4">
								<div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center">
									<Award className="w-8 h-8 text-white" />
								</div>
								<div>
									<p className="text-3xl font-bold text-primary-900">150+</p>
									<p className="text-sm text-gray-600">Projects Completed</p>
								</div>
							</div>
						</div>

						{/* Decorative Elements */}
						<div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary-200/50 rounded-full blur-2xl" />
						<div className="absolute -bottom-4 left-1/3 w-32 h-32 bg-primary-200/50 rounded-full blur-2xl" />
					</div>

					{/* Content Side */}
					<div
						className="order-1 lg:order-2 space-y-8"
						data-aos="fade-left"
						data-aos-delay="100"
					>
						{/* Badge */}
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 font-semibold text-sm">
							<Zap className="w-4 h-4" />
							<span>About Us</span>
						</div>

						{/* Title */}
						<h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-900 to-primary-700">
							IT Consulting & Computer Training
						</h2>

						{/* Description */}
						<div className="space-y-4 text-gray-700 leading-relaxed">
							<p>
								We help you transform your innovation performance for long-term
								success by combining our programming knowledge with our
								expertise in product and technology development processes.
							</p>
							<p>
								Our team is able to give Technical Support, Project Validation
								and Alternative Solutions. We also develop creative solutions
								for small and big brands, build authentic product identities and
								much more.
							</p>
						</div>

						{/* Stats Grid */}
						<div className="grid grid-cols-2 gap-4 pt-4">
							{stats.map((stat, index) => (
								<div
									key={stat.label}
									className="group p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-primary-200 transition-all duration-300 hover:shadow-medium"
									data-aos="fade-up"
									data-aos-delay={200 + index * 50}
								>
									<stat.icon className="w-8 h-8 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
									<p className="text-3xl font-bold text-primary-900 mb-1">
										{stat.value}
									</p>
									<p className="text-sm text-gray-600">{stat.label}</p>
								</div>
							))}
						</div>

						{/* CTA */}
						<Link
							href="/#services"
							className="btn-primary inline-flex items-center gap-2"
						>
							<span>Explore Our Services</span>
							<Zap className="w-5 h-5" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
