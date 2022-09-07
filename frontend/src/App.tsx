import React, { Fragment } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/custom.scss";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Training from "./pages/Training";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import Header from "./components/shared/Header";
// import Footer from "./components/shared/Footer";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import Training from "./pages/training";
import LandingPage from "./pages";
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
