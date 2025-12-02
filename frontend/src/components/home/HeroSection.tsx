import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Code, Palette, Rocket } from "lucide-react";

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-800 to-primary-950">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-20 left-10 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" />
				<div
					className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"
					style={{ animationDelay: "2s" }}
				/>
				<div
					className="absolute top-1/3 right-20 w-72 h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"
					style={{ animationDelay: "4s" }}
				/>
			</div>

			{/* Grid Pattern Overlay */}
			<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />

			{/* Content */}
			<div className="relative z-10 container-main">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<div className="text-center lg:text-left space-y-8">
						{/* Badge */}
						<div
							className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium"
							data-aos="fade-down"
						>
							<Sparkles className="w-4 h-4 text-secondary-400" />
							<span>Welcome to the Future of Tech</span>
						</div>

						{/* Headline */}
						<h1
							className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
							data-aos="fade-up"
							data-aos-delay="100"
						>
							Build Better{" "}
							<span className="relative inline-block">
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-accent-400">
									Products
								</span>
								<svg
									className="absolute -bottom-2 left-0 w-full"
									height="12"
									viewBox="0 0 200 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M2 7C36 2 164 2 198 7"
										stroke="url(#gradient)"
										strokeWidth="3"
										strokeLinecap="round"
									/>
									<defs>
										<linearGradient
											id="gradient"
											x1="0%"
											y1="0%"
											x2="100%"
											y2="0%"
										>
											<stop offset="0%" stopColor="#fb923c" />
											<stop offset="100%" stopColor="#2dd4bf" />
										</linearGradient>
									</defs>
								</svg>
							</span>{" "}
							& Skills
						</h1>

						{/* Description */}
						<p
							className="text-xl md:text-2xl text-gray-300 max-w-2xl"
							data-aos="fade-up"
							data-aos-delay="200"
						>
							Transform your ideas into reality with cutting-edge software
							development, expert training, and strategic consulting services.
						</p>

						{/* Feature Pills */}
						<div
							className="flex flex-wrap gap-4 justify-center lg:justify-start"
							data-aos="fade-up"
							data-aos-delay="300"
						>
							<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white">
								<Code className="w-5 h-5 text-secondary-400" />
								<span className="text-sm font-medium">Development</span>
							</div>
							<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white">
								<Palette className="w-5 h-5 text-accent-400" />
								<span className="text-sm font-medium">Design</span>
							</div>
							<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white">
								<Rocket className="w-5 h-5 text-primary-400" />
								<span className="text-sm font-medium">Training</span>
							</div>
						</div>

						{/* CTA Buttons */}
						<div
							className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
							data-aos="fade-up"
							data-aos-delay="400"
						>
							<Link
								href="/#services"
								className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-secondary-500 to-secondary-600 text-white font-semibold text-lg transition-all duration-300 hover:from-secondary-600 hover:to-secondary-700 hover:shadow-glow-secondary hover:scale-105 active:scale-95"
							>
								Explore Services
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</Link>
							<Link
								href="/#contact-us"
								className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-primary-900 hover:border-white"
							>
								Get In Touch
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
				<Link
					href="/#about-us"
					className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors group"
				>
					<span className="text-sm font-medium">Scroll Down</span>
					<div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2 animate-bounce">
						<div className="w-1.5 h-1.5 rounded-full bg-current" />
					</div>
				</Link>
			</div>
		</section>
	);
}
