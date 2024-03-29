/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import LogoComp, { LogoColorEnum } from "./LogoComp";
import { useRouter } from "next/router";

const Header: React.FC<{
	scrolled?: boolean;
	showMobileNav: boolean;
	toggleMobileNav: (state: boolean) => void;
}> = ({ scrolled, showMobileNav, toggleMobileNav }) => {
	const pathName = useRouter().pathname;
	const home = "/";
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		window.addEventListener("resize", () => {
			window.innerWidth <= 758 ? setIsMobile(true) : setIsMobile(false);
		});
	});

	return (
		<header className={`header ${scrolled ? "scrolled" : ""}`}>
			<nav className={`navbar ${!isMobile ? "container" : ""}`}>
				<Link href="/">
					<a className="ms-2">
						<LogoComp
							fill={scrolled ? LogoColorEnum.YELLOW : LogoColorEnum.UBUBA_BLUE}
						/>
					</a>
				</Link>

				<ul
					className={`nav ${
						showMobileNav ? "abs text-center" : "d-none d-md-flex"
					}`}
				>
					<div className="text-end">
						<button
							className="btn d-md-none btn-animation"
							onClick={() => toggleMobileNav(false)}
						>
							<i className="fas fa-close text-light"></i>
						</button>
					</div>

					{navList.map((nav) => (
						<li key={nav.name} className="nav-item">
							<Link href={nav.link}>
								<a
									className={`nav-link ${
										nav.name === "Contact" ? "nav-contact-btn" : ""
									} ${scrolled ? "text-primary" : "text-primary"}`}
									onClick={() => toggleMobileNav(false)}
								>
									{nav.name}
								</a>
							</Link>
						</li>
					))}
				</ul>

				<button
					className="btn d-block d-md-none"
					onClick={() => toggleMobileNav(true)}
				>
					<i
						className={`fas fa-bars ${
							scrolled
								? "text-secondary"
								: pathName != home
								? "text-primary"
								: "text-primary"
						} `}
					></i>
				</button>
			</nav>
		</header>
	);
};

export default Header;

const navList = [
	{ name: "Home", link: "/" },
	{ name: "About Us", link: "/#about-us" },
	{ name: "Services", link: "/#services" },
	{ name: "Training", link: "/training" },
	{ name: "Contact", link: "/#contact-us" },
];
