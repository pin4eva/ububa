import React from "react";
import Register from "../components/Register";
import FrontLayout from "../components/shared/FrontLayout";

const Training = () => {
	return (
		<FrontLayout showHeader={true}>
			<div className="container">
				<Register />
			</div>
		</FrontLayout>
	);
};

export default Training;
