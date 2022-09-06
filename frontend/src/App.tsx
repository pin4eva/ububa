import React, { Fragment } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/custom.scss";
<<<<<<< HEAD
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Training from "./pages/Training";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import Header from "./components/shared/Header";
// import Footer from "./components/shared/Footer";
import Register from "./components/Register";
const App: React.FC = () => {
	return (
		<Fragment>
			{/* <Header />
=======
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Training from "./pages/Training";

const App: React.FC = () => {
	return (
		<Fragment>
>>>>>>> 9553598d189c348d1cd24be55926d2edc6e1c6cf
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/training" element={<Training />} />
			</Routes>
<<<<<<< HEAD
			<Footer /> */}
			<Register />
=======
>>>>>>> 9553598d189c348d1cd24be55926d2edc6e1c6cf
		</Fragment>
	);
};

export default App;
