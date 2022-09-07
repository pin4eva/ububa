/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const FrontLayout: React.FC<{
	children: React.ReactElement;
	showHeader?: boolean;
}> = ({ children }) => {
	const ref = useRef<HTMLDivElement>(null);
	const [scrolled, setScrolled] = useState(false);
	const [pageWidth, setPageWidth] = useState(920);

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", (e) => {
				const isMobile = pageWidth <= 768;
				const pageHeight = window.scrollY;
				if (pageHeight > 220) {
					setScrolled(true);
				} else setScrolled(false);
			});
			window.addEventListener("resize", (e) => {
				const width = window.innerWidth;
				if (width < 920) {
					setPageWidth(width);
				} else {
					setPageWidth(920);
				}
			});
		}
	}, []);
	return (
		<Fragment>
			<div className="front-layout">
				<Header scrolled={scrolled} />
				<main className="front-layout-main">{children}</main>

				<Footer />
			</div>
		</Fragment>
	);
};

export default FrontLayout;
