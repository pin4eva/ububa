import FooterComp from "components/FooterComp";
import React from "react";

const FrontLayout: React.FC<{ children: React.ReactElement }> = ({
	children,
}) => {
	return (
		<div className="front">
			<div className="children">{children}</div>
			<FooterComp />
		</div>
	);
};

export default FrontLayout;
