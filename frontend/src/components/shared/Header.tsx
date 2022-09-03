/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";

const Header = () => {
	const [browserWidth, setBrowserWidth] = useState<number>(window.innerWidth);
	const [view, setView] = useState(false);

	function updateBrowserWidth() {
		setBrowserWidth(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener("resize", updateBrowserWidth);

		return () => {
			window.removeEventListener("resize", updateBrowserWidth);
		};
	}, [browserWidth]);

	return (
		<header className="text-primary bg-secondary">
			<div className="desktop-nav d-flex">
				<div className="logo">
					<Link to={"/"}>
						<i className="fa-solid fa-universal-access"></i>
					</Link>
				</div>

				{browserWidth > 800 ? (
					<Nav browserWidth={browserWidth} />
				) : (
					<button onClick={() => setView(!view)}>
						<i className="fa-solid fa-bars text-light"></i>
					</button>
				)}

				<div></div>
			</div>

			{/* conditionally render mobile nav based on user's screen width */}
			<div className="mobile-nav">
				{view && browserWidth < 800 && <Nav browserWidth={browserWidth} />}
			</div>
		</header>
	);
};

export default Header;
