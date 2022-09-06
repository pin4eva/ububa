import React from "react";
import ProductCard from "../components/ProductCard";
import FrontLayout from "../components/shared/FrontLayout";
import Header from "../components/shared/Header";
import TeamCard from "../components/TeamCard";
import { productsData } from "../data/products.data";
import { TeamData } from "../data/team.data";

const LandingPage = () => {
	return (
		<FrontLayout showHeader={false}>
			<div className="landing-page" id="home">
				<div className="home-hero">
					<Header />
					<div className="home-hero-title text-center">
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
					<h3 className="text-secondary text-center section-title">About Us</h3>
					<div className="about-us-inner">
						<div className="about-us-inner-desc">
							<h4>IT CONSULTING, COMPUTER TRAINING</h4>
							<p>
								We help you transform your innovation performance for long-term
								success by combining our Programming knowledge with our
								expertise in product and technology development processes. Our
								team is able to give Technical Support, Project Validation and
								Alternative Solutions. We also develop creative solutions for
								small and big brands , also build authenthic product identities
								and much more.
							</p>
							<button className="btn-lg">READ MORE</button>
						</div>
						<div className="img">
							<img src="/images/side1.png" alt="" />
						</div>
					</div>
				</section>

				<section id="products" className="products">
					<h3 className="text-secondary text-center section-title">Products</h3>
					<div className="products-inner">
						{productsData.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				</section>

				<section className="testimonials mt-5">
					<h3 className="text-light text-start section-title">
						We believe in the power of technology
					</h3>
					<div className="testimonials-inner">
						<h4 className="mb-3">OUR HAPPY CLIENTS</h4>
						<h5 className="mb-3">What Clients Say?</h5>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
							necessitatibus facere ducimus odit. Dolores ducimus a maiores amet
							omnis quae magnam perspiciatis, nam totam nulla, molestias
							accusamus fugiat inventore facere.
						</p>
					</div>
				</section>

				<section className="our-team mt-5">
					<p className="text-center sub-heading">YOU CAN MEET OUR TEAM</p>
					<h3 className="text-secondary text-center section-title">OUR TEAM</h3>
					<div className="our-team-card-wrapper">
						{TeamData.map((teamMember) => (
							<TeamCard teamMember={teamMember} key={teamMember.id} />
						))}
					</div>
				</section>

				<section id="contact-us" className="contact-us">
					<h3 className="text-secondary text-center section-title">
						Contact Us
					</h3>
					<form>
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
							<button className="btn-sm">Register</button>
						</div>
					</form>
				</section>
			</div>
		</FrontLayout>
	);
};

export default LandingPage;

// This page should comprise of the header and hero component
