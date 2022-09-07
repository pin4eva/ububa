import React, { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

const FrontLayout: React.FC<{
	children: React.ReactElement;
	showHeader?: boolean;
}> = ({ children, showHeader }) => {
	return (
		<Fragment>
			<Header />
			<div className="layout">{showHeader && <Header />}</div>
			{children}
			<Footer />
		</Fragment>
	);
};

export default FrontLayout;
