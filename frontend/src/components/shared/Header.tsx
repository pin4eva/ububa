/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Nav from "../Nav";
import LogoComp, { LogoColorEnum } from "./LogoComp";

const Header: React.FC<{ scrolled?: boolean; isMobile?: boolean }> = ({
	scrolled,
	isMobile,
}) => {
	return (
		<header className={`header ${scrolled ? "scrolled" : ""}`}>
			<nav className="navbar container">
				<Link href="/">
					<a>
						<LogoComp
							fill={scrolled ? LogoColorEnum.YELLOW : LogoColorEnum.WHITE}
						/>
					</a>
				</Link>

				<ul className="nav d-none d-md-flex">
					{navList.map((nav) => (
						<li key={nav.name} className="nav-item">
							<Link href={nav.link}>
								<a className="nav-link">{nav.name}</a>
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
	{ name: "About Us", link: "/#about" },
	{ name: "Training", link: "/training" },
];
