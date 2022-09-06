/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC<{ browserWidth: number }> = ({ browserWidth }) => {
	return (
		<nav className={browserWidth < 800 ? "mb-5" : ""}>
			<ul className={browserWidth > 800 ? `d-flex-between` : ` `}>
				<li>
					<a href="#home">Home</a>
				</li>

				<li>
					<a href="#about-us">About Us</a>
				</li>
				<Link to={"/training"}>
					<li>
						<a>Training</a>
					</li>
				</Link>
				<li>
					<a href="#products">Products</a>
				</li>
				<li>
					<a href="#contact-us">
						<button className="btn-sm contact-us">Contact</button>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
