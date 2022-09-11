/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
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

	return (
		<header
			className={`header ${scrolled ? "scrolled" : ""}`}
			style={{
				background: `${pathName === "/" ? "rgba($blue, 0.3)" : "transparent"}`,
			}}
		>
			<nav className="navbar container">
				<Link href="/">
					<a className="ms-2">
						<LogoComp
							fill={
								scrolled
									? LogoColorEnum.YELLOW
									: pathName !== home
									? LogoColorEnum.UBUBA_BLUE
									: LogoColorEnum.WHITE
							}
						/>
					</a>
				</Link>

				<ul
					className={`nav ${
						showMobileNav ? "abs text-center" : "d-none d-md-flex"
					}`}
				>
					<div className="text-start">
						<button
							className="btn d-md-none "
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
										nav.name === "Contact" ? "btn-sm" : ""
									} ${
										pathName !== home || (scrolled && !showMobileNav)
											? "text-primary"
											: "text-light"
									}`}
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
								: ""
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
	{ name: "Products", link: "/#products" },
	{ name: "Training", link: "/training" },
	{ name: "Contact", link: "/#contact-us" },
];
