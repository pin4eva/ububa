/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useLayoutEffect, useState } from "react";
import ServiceCard from "../components/home/ServiceCard";
import FrontLayout from "../components/shared/FrontLayout";
import TeamCard from "../components/home/TeamCard";
import { TeamData } from "../data/team.data";
import { ClipLoader } from "react-spinners";
import Head from "next/head";
import Link from "next/link";
import { servicesData } from "data/services.data";
import { EventsAlerts } from "data/alerts.data";
import TestimonialsSlider from "components/TestimonialsSlider";

const LandingPage = () => {
	const [loaded, setLoaded] = useState(false);
	const [revealPayload, setRevealPayload] = useState(false);

	const handlePayload = (state: boolean) => {
		setRevealPayload(state);
	};

	useEffect(() => {
		// check document status at an instance
		if (document.readyState == "complete") setLoaded(true);
		else {
			if (typeof window !== "undefined") {
				window.addEventListener("load", () => {
					const images = document?.getElementsByTagName("img");
					console.log(images);

					const heroImg = Array.from(images)[0];
					if (heroImg.complete && heroImg.naturalHeight !== 0) setLoaded(true);
				});
			}
		}
	}, []);

	return (
		<>
			<Head>
				<title>Ububa Technology</title>
				<meta
					name="description"
					content="At Ububa Technology, we develop creative solutions for small and big brands, give technical support and build authentic product identities amongst other technical and non-technical services."
				/>
			</Head>

			<div className="spinner" style={{ display: loaded ? "none" : "flex" }}>
				<ClipLoader size={70} loading={true} color="#f6921e" />
			</div>
			<div style={{ display: loaded ? "block" : "none" }}>
				<div
					className="events-alert text-center p-2"
					style={{ display: EventsAlerts.length > 0 ? "block" : "none" }}
				>
					{EventsAlerts.map((eventalert) => (
						<Link href={eventalert.link} key={eventalert.id}>
							<a>
								<i className="fa-solid fa-circle-exclamation me-2"></i>
								{eventalert.message}
							</a>
						</Link>
					))}
				</div>
				<FrontLayout>
					<div className="landing-page" id="home">
						<div className="home-hero">
							<img
								src="/images/home-hero.jpg"
								alt="hero bg img"
								className="hero-bg"
							/>
							<div className="home-hero-inner text-center">
								<h4 className="text-light">
									Build better products and <br /> build better Skills
								</h4>
								<div className="mt-5 d-flex-center">
									<Link href={"/#services"}>
										<a>
											<button className="hero-cta ">View Services</button>
										</a>
									</Link>
								</div>
							</div>
						</div>

						<section id="about-us" className="about-us pt-5 pb-4">
							{/* <h3 className="text-center section-title">About Us</h3> */}
							<div className="about-us-inner container">
								<div className="about-us-inner-desc">
									<h3>IT CONSULTING, COMPUTER TRAINING</h3>
									<p>
										We help you transform your innovation performance for
										long-term success by combining our Programming knowledge
										with our expertise in product and technology development
										processes. Our team is able to give Technical Support,
										Project Validation and Alternative Solutions. We also
										develop creative solutions for small and big brands , also
										build authenthic product identities and much more.
									</p>
									<button className="btn-lg">Read More</button>
								</div>
								<div className="img">
									<img src="/images/side1.png" alt="" loading="lazy" />
								</div>
							</div>
						</section>

						<section className="our-team pt-4">
							<h3 className="text-center section-title">Our Team</h3>
							<div className="our-team-card-wrapper container">
								{TeamData.map((teamMember) => (
									<TeamCard teamMember={teamMember} key={teamMember.id} />
								))}
							</div>
						</section>

						<section id="services" className="services">
							<h3 className=" text-center section-title">Our Services</h3>
							<div className="services-inner container">
								{servicesData.map((service) => (
									<ServiceCard
										key={service.id}
										service={service}
										handlePayload={handlePayload}
									/>
								))}
							</div>
						</section>

						<TestimonialsSlider />

						<section id="contact-us" className="contact-us container pt-5">
							<h3 className="section-title ps-0 pt-3 pb-5 text-center">
								{"We'd Love to Hear From You"}
							</h3>
							<div className="contact-us-inner ">
								<div className="locate-us">
									<div className="locate-us-contact-details">
										<p>
											<i className="fa-solid fa-location-pin"></i>
											Victoria Plaza Rumuodara Junction
										</p>
										<p>
											<i className="fa-solid fa-phone"></i>
											+2347062275085
										</p>
										<p>
											<i className="fa-solid fa-envelope"></i>
											ububa.tech@gmail.com
										</p>
									</div>
									<div className="google-map-container">
										<iframe
											src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.4667677297858!2d7.0300656572127425!3d4.860912785864461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d38495de7af1%3A0xe105140708574a41!2sGourmet%20Spanish%20Supermarket!5e0!3m2!1sen!2sng!4v1663574022010!5m2!1sen!2sng"
											width="100%"
											height="100%"
											loading="lazy"
										></iframe>
									</div>
								</div>

								<div className="message-us">
									{/* <h3 className="ps-0 section-title">Send Us a Message</h3> */}
									<form className="form-group">
										{
											<select
												required
												style={{ display: revealPayload ? "block" : "none" }}
											>
												<option style={{ color: "gray" }}>
													Select Needed Service
												</option>
												{Object.values(servicesData).map((elem) => (
													<option key={elem.id}>{elem.productTitle}</option>
												))}
											</select>
										}
										<input
											autoFocus
											required
											type="text"
											name="name"
											placeholder="Name"
										/>
										<input
											required
											type="email"
											name="email"
											placeholder="Email"
										/>
										<textarea
											required
											name=""
											id=""
											cols={10}
											rows={5}
											placeholder="Kindly give us a brief description of your project needs"
										></textarea>
										<div className="text-end">
											<button
												onClick={() => handlePayload(false)}
												className="btn-sm"
											>
												Submit
											</button>
										</div>
									</form>
								</div>
							</div>
						</section>
					</div>
				</FrontLayout>
			</div>
		</>
	);
};

export default LandingPage;

// This page should comprise of the header and hero component