/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Nav from "../home/Nav";
import LogoComp, { LogoColorEnum } from "./LogoComp";
import { useRouter } from "next/router";

const Header: React.FC<{ scrolled?: boolean; isMobile?: boolean }> = ({
	scrolled,
	isMobile,
}) => {
	const pathName = useRouter().pathname;

	return (
		<header
			className={`header ${scrolled ? "scrolled" : ""}`}
			style={{
				background: `${pathName === "/" ? "rgba($blue, 0.3)" : "transparent"}`,
			}}
		>
			<nav className="navbar container">
				<Link href="/">
					<a>
						<LogoComp
							fill={
								pathName === "/" && !scrolled
									? LogoColorEnum.WHITE
									: pathName === "/" && scrolled
									? LogoColorEnum.YELLOW
									: pathName === "/training" && !scrolled
									? LogoColorEnum.UBUBA_BLUE
									: pathName === "/training" && scrolled
									? LogoColorEnum.YELLOW
									: LogoColorEnum.WHITE
							}
						/>
					</a>
				</Link>

				<ul className="nav d-none d-md-flex">
					{navList.map((nav) => (
						<li key={nav.name} className="nav-item">
							<Link href={nav.link}>
								<a
									className={`nav-link ${
										nav.name === "Contact" ? "btn-sm" : ""
									}`}
									style={{
										color: `${
											pathName === "/" && !scrolled
												? "white"
												: pathName === "/" && scrolled
												? "#0a1828"
												: pathName === "/training"
												? "#0a1828"
												: ""
										}`,
									}}
								>
									{nav.name}
								</a>
							</Link>
						</li>
					))}
				</ul>
				<button className="btn d-block d-md-none">
					<i className="fas fa-bars"></i>
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
