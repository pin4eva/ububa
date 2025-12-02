import Link from "next/link";
import {
	Linkedin,
	Facebook,
	Twitter,
	MapPin,
	Phone,
	Mail,
	ArrowUpRight,
} from "lucide-react";
import LogoComp, { LogoColorEnum } from "./LogoComp";
import { siteConfig } from "@/utils/site-config";

const serviceLinks = [
	"Android App Development",
	"Android UI/UX Design",
	"iPhone App Development",
	"Wordpress Development",
	"Custom Solutions",
];

const developmentLinks = [
	"Web Development",
	"Mobile App Development",
	"Custom Website Design",
	"Brand Identity",
];

const socialLinks = [
	{ icon: Linkedin, href: siteConfig.socialMedia.linkedin, label: "LinkedIn" },
	{ icon: Facebook, href: siteConfig.socialMedia.facebook, label: "Facebook" },
	{ icon: Twitter, href: siteConfig.socialMedia.twitter, label: "Twitter" },
];

export default function Footer() {
	return (
		<footer className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950">
			{/* Decorative Background */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary-500 rounded-full blur-3xl" />
				<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
			</div>

			<div className="container-main py-20 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
					{/* Logo & Description */}
					<div className="lg:col-span-1 space-y-6">
						<Link
							href="/"
							className="inline-block transition-transform hover:scale-105 duration-200"
						>
							<LogoComp fill={LogoColorEnum.YELLOW} />
						</Link>
						<p className="text-gray-400 leading-relaxed">
							Building better products and empowering better skills through
							innovation and expertise.
						</p>

						{/* Social Links - Moved here for better mobile layout */}
						<div className="flex gap-3 pt-2">
							{socialLinks.map((social) => (
								<Link
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={social.label}
									className="group w-11 h-11 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center
                           hover:bg-gradient-to-br hover:from-primary-600 hover:to-secondary-600
                           transition-all duration-300 border border-white/10 hover:border-transparent
                           hover:scale-110 hover:shadow-glow"
								>
									<social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
								</Link>
							))}
						</div>
					</div>

					{/* Services */}
					<div>
						<h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
						<ul className="space-y-3">
							{serviceLinks.map((link) => (
								<li key={link}>
									<span className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm cursor-default">
										<span className="w-1.5 h-1.5 rounded-full bg-secondary-500/60 group-hover:bg-secondary-500 transition-colors" />
										{link}
									</span>
								</li>
							))}
						</ul>
					</div>

					{/* Development */}
					<div>
						<h4 className="text-lg font-bold mb-6 text-white">Development</h4>
						<ul className="space-y-3">
							{developmentLinks.map((link) => (
								<li key={link}>
									<span className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm cursor-default">
										<span className="w-1.5 h-1.5 rounded-full bg-primary-500/60 group-hover:bg-primary-500 transition-colors" />
										{link}
									</span>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="text-lg font-bold mb-6 text-white">Get In Touch</h4>
						<ul className="space-y-4">
							<li>
								<div className="flex items-start gap-3 group">
									<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
										<MapPin className="w-5 h-5 text-secondary-400" />
									</div>
									<div>
										<p className="text-xs text-gray-500 mb-1">Location</p>
										<span className="text-gray-300 text-sm leading-relaxed">
											{siteConfig.address}
										</span>
									</div>
								</div>
							</li>
							<li>
								<Link
									href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
									className="flex items-start gap-3 group"
								>
									<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
										<Phone className="w-5 h-5 text-secondary-400" />
									</div>
									<div>
										<p className="text-xs text-gray-500 mb-1">Phone</p>
										<span className="text-gray-300 group-hover:text-white text-sm transition-colors">
											{siteConfig.phone}
										</span>
									</div>
								</Link>
							</li>
							<li>
								<Link
									href={`mailto:${siteConfig.email}`}
									className="flex items-start gap-3 group"
								>
									<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
										<Mail className="w-5 h-5 text-secondary-400" />
									</div>
									<div>
										<p className="text-xs text-gray-500 mb-1">Email</p>
										<span className="text-gray-300 group-hover:text-white text-sm transition-colors">
											{siteConfig.email}
										</span>
									</div>
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Newsletter Section */}
				<div className="mt-16 pt-12 border-t border-white/10">
					<div className="max-w-2xl mx-auto text-center space-y-6">
						<h3 className="text-2xl font-bold text-white">Stay Updated</h3>
						<p className="text-gray-400">
							Get the latest updates on our services and training programs
						</p>
						<div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500
                         focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
							/>
							<button className="btn-secondary whitespace-nowrap">
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Copyright */}
			<div className="relative border-t border-white/10 bg-primary-950/50 backdrop-blur-sm">
				<div className="container-main py-6">
					<div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
						<p className="text-gray-500">
							© {new Date().getFullYear()}{" "}
							<span className="text-gray-400 font-medium">
								Ububa Technologies
							</span>
							. All rights reserved.
						</p>
						<div className="flex items-center gap-6">
							<Link
								href="/privacy"
								className="text-gray-500 hover:text-white transition-colors"
							>
								Privacy Policy
							</Link>
							<Link
								href="/terms"
								className="text-gray-500 hover:text-white transition-colors"
							>
								Terms of Service
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
