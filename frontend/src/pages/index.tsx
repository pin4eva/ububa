/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useLayoutEffect, useState } from "react";
import ProductCard from "../components/home/ProductCard";
import FrontLayout from "../components/shared/FrontLayout";
import TeamCard from "../components/home/TeamCard";
import { productsData } from "../data/products.data";
import { TeamData } from "../data/team.data";

const LandingPage = () => {
	const [pageIsLoaded, setPageIsLoaded] = useState(false);

	useEffect(() => {
		// toggles state of isLoading & run once!
		const toggleLoading = () => {
			setPageIsLoaded(true);
		};

		// check state of resources if already loaded.
		if (document.readyState === "complete") {
			setPageIsLoaded(true);
		}
		// else add an event listener and call fxn.
		else {
			window.addEventListener("load", toggleLoading);
		}

		// console.log(document.readyState);

		// return window.removeEventListener("load", toggleLoading);
	}, []);

	console.log(pageIsLoaded);

	return (
		<>
			{pageIsLoaded ? (
				<FrontLayout>
					<div className="landing-page" id="home">
						<div className="home-hero">
							<div className="home-hero-inner text-center">
								<h4 className="text-light">
									Build better products and <br /> build better Skills
								</h4>
								<div className="mt-5 d-flex-center">
									<button className="btn-lg ">View</button>
									<button className="btn-lg">Call</button>
								</div>
							</div>
						</div>

						<section id="about-us" className="about-us">
							<h3 className="text-secondary text-center section-title">
								About Us
							</h3>
							<div className="about-us-inner container">
								<div className="about-us-inner-desc">
									<h4>IT CONSULTING, COMPUTER TRAINING</h4>
									<p>
										We help you transform your innovation performance for
										long-term success by combining our Programming knowledge
										with our expertise in product and technology development
										processes. Our team is able to give Technical Support,
										Project Validation and Alternative Solutions. We also
										develop creative solutions for small and big brands , also
										build authenthic product identities and much more.
									</p>
									<button className="btn-lg">READ MORE</button>
								</div>
								<div className="img">
									<img src="/images/side1.png" alt="" />
								</div>
							</div>
						</section>

						<section id="products" className="products">
							<h3 className="text-secondary text-center section-title">
								Products
							</h3>
							<div className="products-inner container">
								{productsData.map((product) => (
									<ProductCard key={product.id} product={product} />
								))}
							</div>
						</section>

						<section className="testimonials mt-5">
							<h3 className="container text-light section-title">
								We believe in the power of technology
							</h3>
							<div className="testimonials-inner container">
								<h4 className="mb-3">OUR HAPPY CLIENTS</h4>
								<h5 className="mb-3">What Clients Say?</h5>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
									necessitatibus facere ducimus odit. Dolores ducimus a maiores
									amet omnis quae magnam perspiciatis, nam totam nulla,
									molestias accusamus fugiat inventore facere.
								</p>
							</div>
						</section>

						<section className="our-team mt-5">
							<p className="text-center sub-heading">YOU CAN MEET OUR TEAM</p>
							<h3 className="text-secondary text-center section-title">
								OUR TEAM
							</h3>
							<div className="our-team-card-wrapper container">
								{TeamData.map((teamMember) => (
									<TeamCard teamMember={teamMember} key={teamMember.id} />
								))}
							</div>
						</section>

						<section id="contact-us" className="contact-us">
							<h3 className="text-secondary text-center section-title">
								Contact Us
							</h3>
							<form className="container">
								<input required type="text" name="name" placeholder="Name" />
								<input required type="email" name="email" placeholder="Email" />
								<textarea
									required
									name=""
									id=""
									cols={10}
									rows={5}
									placeholder="Message"
								></textarea>
								<div className="text-center">
									<button className="btn-sm">Submit</button>
								</div>
							</form>
						</section>
					</div>
				</FrontLayout>
			) : (
				<p>Loading...</p>
			)}
		</>
	);
};

export default LandingPage;

// This page should comprise of the header and hero component
