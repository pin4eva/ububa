"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import LogoComp, { LogoColorEnum } from "./LogoComp";

const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/#about-us" },
	{ name: "Services", href: "/#services" },
	{ name: "Contact", href: "/#contact-us" },
];

interface HeaderProps {
	scrolled: boolean;
	showMobileNav: boolean;
	toggleMobileNav: (state: boolean) => void;
}

export default function Header({
	scrolled,
	showMobileNav,
	toggleMobileNav,
}: HeaderProps) {
	const pathname = usePathname();
	const isHome = pathname === "/";
	const [activeLink, setActiveLink] = useState("");

	useEffect(() => {
		// Set active link based on hash or pathname
		const hash = window.location.hash;
		if (hash) {
			setActiveLink(hash);
		} else {
			setActiveLink(pathname);
		}
	}, [pathname]);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled ? "glass-effect shadow-medium py-3" : "bg-transparent py-5"
			}`}
		>
			<nav className="container-main flex items-center justify-between">
				{/* Logo */}
				<Link
					href="/"
					className="relative z-10 transition-transform duration-200 hover:scale-105"
				>
					<LogoComp
						fill={scrolled ? LogoColorEnum.YELLOW : LogoColorEnum.WHITE}
					/>
				</Link>

				{/* Desktop Navigation */}
				<ul className="hidden lg:flex items-center gap-2">
					{navLinks.map((link) => {
						const isActive =
							link.href === pathname ||
							(link.href.includes("#") && activeLink === link.href);

						return (
							<li key={link.name}>
								{link.name === "Contact" ? (
									<Link
										href={link.href}
										className="btn-secondary !py-2.5 !px-6 text-sm"
									>
										{link.name}
									</Link>
								) : (
									<Link
										href={link.href}
										className={`relative px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200
                      ${
												scrolled
													? isActive
														? "text-primary-700 bg-primary-50 font-semibold"
														: "text-gray-700 hover:text-primary-600 hover:bg-primary-50/50"
													: isHome
													? isActive
														? "text-white bg-white/20 backdrop-blur-sm font-semibold"
														: "text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm"
													: isActive
													? "text-primary-700 bg-primary-50 font-semibold"
													: "text-gray-700 hover:text-primary-600 hover:bg-primary-50/50"
											}`}
									>
										{link.name}
									</Link>
								)}
							</li>
						);
					})}
				</ul>

				{/* Mobile Menu Button */}
				<button
					className="lg:hidden relative z-10 p-2 rounded-xl transition-all duration-200 hover:scale-110 active:scale-95"
					onClick={() => toggleMobileNav(!showMobileNav)}
					aria-label="Toggle menu"
					style={{
						background:
							scrolled || !isHome
								? "linear-gradient(135deg, rgba(91, 117, 245, 0.1), rgba(249, 115, 22, 0.1))"
								: "rgba(255, 255, 255, 0.1)",
					}}
				>
					{showMobileNav ? (
						<X
							className={`w-6 h-6 ${
								scrolled || !isHome ? "text-primary-700" : "text-white"
							}`}
						/>
					) : (
						<Menu
							className={`w-6 h-6 ${
								scrolled || !isHome ? "text-primary-700" : "text-white"
							}`}
						/>
					)}
				</button>

				{/* Mobile Navigation */}
				<div
					className={`fixed inset-0 lg:hidden transition-all duration-500 ${
						showMobileNav ? "opacity-100 visible" : "opacity-0 invisible"
					}`}
				>
					{/* Backdrop */}
					<div
						className="absolute inset-0 bg-gradient-to-br from-primary-950/95 via-primary-900/95 to-secondary-900/95 backdrop-blur-xl"
						onClick={() => toggleMobileNav(false)}
					/>

					{/* Menu Content */}
					<div className="relative h-full flex flex-col items-center justify-center p-8">
						{/* Decorative elements */}
						<div className="absolute top-20 left-10 w-40 h-40 bg-secondary-500/20 rounded-full blur-3xl animate-float" />
						<div
							className="absolute bottom-20 right-10 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl animate-float"
							style={{ animationDelay: "2s" }}
						/>

						<ul className="relative z-10 flex flex-col items-center gap-6 w-full max-w-md">
							{navLinks.map((link, index) => {
								const isActive =
									link.href === pathname ||
									(link.href.includes("#") && activeLink === link.href);

								return (
									<li
										key={link.name}
										className="w-full"
										style={{
											animation: showMobileNav
												? `fadeInUp 0.3s ease-out ${index * 0.1}s both`
												: "none",
										}}
									>
										{link.name === "Contact" ? (
											<Link
												href={link.href}
												onClick={() => toggleMobileNav(false)}
												className="btn-secondary w-full text-center text-lg !py-4"
											>
												{link.name}
											</Link>
										) : (
											<Link
												href={link.href}
												onClick={() => toggleMobileNav(false)}
												className={`group flex items-center justify-between w-full px-6 py-4 rounded-2xl text-lg font-semibold transition-all duration-300
                          ${
														isActive
															? "bg-white/20 backdrop-blur-sm text-white border-2 border-white/30"
															: "text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm border-2 border-transparent"
													}`}
											>
												<span>{link.name}</span>
												<ChevronRight
													className={`w-5 h-5 transition-transform duration-300 ${
														isActive
															? "opacity-100"
															: "opacity-0 group-hover:opacity-100"
													}`}
												/>
											</Link>
										)}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
