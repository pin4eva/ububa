import React from "react";
import "./scss/main.scss";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Training from "./components/Training";
import Testimonial from "./components/Testimonial";
import Blank from "./components/Blank";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="home">
			<div className="hero">
				<Navbar />
				<div className="header">
					<div className="header__content">
						<h1 className="header__content-h1">
							Build Better Products and <br /> Build Better Skills
						</h1>
						<div className="header__content-buttons">
							<button className="btn_1">View</button>
							<button className="btn_2">Call</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// function App() {
// 	return (
// 		<div>
// 			<Navbar />
// 			<Header />
// 			<About />
// 			<Training />
// 			<Testimonial />
// 			<Blank />
// 			<Portfolio />
// 			<Contact />
// 			<Footer />
// 		</div>
// 	);
// }

export default App;
