import React, { Fragment } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/custom.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Training from "./pages/Training";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

const App: React.FC = () => {
	return (
		<Fragment>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/training" element={<Training />} />
				<Route path="/services" element={<Services />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</Fragment>
	);
};

export default App;
