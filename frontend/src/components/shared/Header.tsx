/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Nav from "../Nav";

const Header = () => {
	const [browserWidth, setBrowserWidth] = useState<number>(window.innerWidth);
	const [view, setView] = useState(false);
	const [stickyHeader, setStickyHeader] = useState(false);

	function updateBrowserWidth() {
		setBrowserWidth(window.innerWidth);
	}
	const checkScroll = () => {
		window.scrollY >= 70 ? setStickyHeader(true) : setStickyHeader(false);
	};

	window.addEventListener("scroll", checkScroll);

	useEffect(() => {
		window.addEventListener("resize", updateBrowserWidth);

		return () => {
			window.removeEventListener("resize", updateBrowserWidth);
		};
	}, [browserWidth]);

	useEffect(() => {
		window.addEventListener("scroll", checkScroll);

		return () => {
			window.removeEventListener("scroll", checkScroll);
		};
	});

	return (
		<header>
			<div
				className={`${
					browserWidth > 800 ? "d-flex-around p-3" : "d-flex-between p-4 header"
				} ${stickyHeader ? "navs sticky" : ""}`}
			>
				<div className="logo">
					<a href="/">
						<img
							src={`/images/${stickyHeader ? "logodark.png" : "logoa.svg"}`}
							alt=""
						/>
					</a>
				</div>

				{browserWidth > 800 ? (
					<Nav browserWidth={browserWidth} />
				) : (
					<i onClick={() => setView(true)} className="fa-solid fa-bars"></i>
				)}

				{/* <div></div> */}
			</div>

			{/* conditionally render mobile nav based on user's screen width */}

			{view && browserWidth < 800 && (
				<div>
					<div
						className="mobile-nav-overlay"
						onClick={() => setView(false)}
					></div>

					<div className="mobile-nav">
						<div className="text-end mt-4 me-4">
							<button
								className="close-mobile-nav"
								onClick={() => setView(false)}
							>
								X
							</button>
						</div>
						<Nav browserWidth={browserWidth} />
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
