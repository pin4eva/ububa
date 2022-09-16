/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const FrontLayout: React.FC<{
	children: React.ReactElement;
	showHeader?: boolean;
}> = ({ children }) => {
	const [scrolled, setScrolled] = useState(false);
	const [isAtFooter, setIsAtFooter] = useState(false);
	const [showMobileNav, setShowMobileNav] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			const pageHeight = window.scrollY;
			if (pageHeight > 0) {
				setScrolled(true);
			} else setScrolled(false);
		});

		window.addEventListener("scroll", () => {
			const pageHeight = window.scrollY;
			if (pageHeight >= 3500) {
				setIsAtFooter(true);
				// console.log(pageHeight);
			} else setIsAtFooter(false);
		});
	});

	const toggleMobileNav = (state: boolean) => {
		setShowMobileNav(state);
	};

	return (
		<Fragment>
			<div className={`front-layout`}>
				<Header
					scrolled={scrolled}
					showMobileNav={showMobileNav}
					toggleMobileNav={toggleMobileNav}
				/>
				<main className="front-layout-main ">{children}</main>

				<Footer isAtFooter={isAtFooter} />
			</div>
		</Fragment>
	);
};

export default FrontLayout;
