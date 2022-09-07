import React, { Fragment } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/index.scss";
import "./styles/custom.scss";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages";
import Training from "./pages/training";

const App: React.FC = () => {
	return (
		<Fragment>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/training" element={<Training />} />
			</Routes>
		</Fragment>
	);
};

export default App;
