/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC<{ browserWidth: number }> = ({ browserWidth }) => {
	return (
		<nav>
			<ul className={browserWidth > 800 ? "d-flex" : ""}>
				<li>
					<Link to={"/"}>
						<a>HOME</a>
					</Link>
				</li>
				<li>
					<Link to={"/about"}>
						<a>ABOUT</a>
					</Link>
				</li>
				<li>
					<Link to={"/training"}>
						<a>TRAINING</a>
					</Link>
				</li>
				<li>
					<Link to={"/services"}>
						<a>SERVICES</a>
					</Link>
				</li>
				<li>
					<Link to={"/contact"}>
						<a>CONTACT</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
