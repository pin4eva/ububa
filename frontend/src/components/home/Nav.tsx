/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";

const Nav = () => {
	return (
		<nav>
			<ul className="nav">
				<li>
					<Link href="/">Home</Link>
				</li>

				<li>
					<a href="#about-us">About Us</a>
				</li>

				<li>
					<Link href={"/training"}>Training</Link>
				</li>

				<li>
					<a href="#products">Products</a>
				</li>

				<li>
					<a href={"#contact-us"}>
						<button className="btn-sm contact-us">Contact</button>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
