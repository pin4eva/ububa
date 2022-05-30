/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import HeaderComp from "components/HeaderComp";
import FrontLayout from "layouts/FrontLayout";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
	return (
		<FrontLayout>
			<>
				<HeaderComp />
				<div className="hero">
					<div className="hero__content">
						<h1 className="hero__content-h1">
							Build Better Products and <br /> Build Better Skills
						</h1>
						<div className="hero__content-buttons">
							<button className="btn_1">View</button>
							<button className="btn_2">Call</button>
						</div>
					</div>
				</div>

				<div className="about">
					<div className="">
						<div className="about__h4">
							<h2>About Us</h2>
						</div>
						<div className="  about__lead">
							<div className=" about__left">
								<div className="container">
									<h4 className="left__text-1">
										IT CONSULTING, COMPUTER TRAINING
									</h4>
									<p className="left__text-2">
										We help you transform your innovation performance for
										long-term success <br /> by combining our Programming
										knowledge with our expertise in product and <br />{" "}
										technology development processes. Our team is able to give
										Technical <br /> Support, Project Validation and Solutions.
										We also develop creative solutions <br />
										for small and big brands , also build authenthic product
										identities and much more.{" "}
									</p>
									<button className="left__btn">View</button>
								</div>
							</div>
							<div className=" about__right">
								<img
									className="about__side-image"
									src="/images/side1.png"
									alt="staffs-pics"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="train">
					<div className="container">
						<div className="train__h1">
							<h1>Training</h1>
						</div>
						<div className=" train__cards mt-40">
							{sections.map((section, i) => (
								<div className="train__card" key={i}>
									<div className="train__section">
										<div className="train__heading">
											<h6>{section.heading}</h6>
										</div>
										<div className="train__text">
											<p> {section.text} </p>
											<button className="train__btn">{section.btn}</button>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="show">
					<div className="container rel">
						<div className="show__content">
							<h1>
								we believe in the <br /> power of technology
							</h1>
						</div>
						<div className="show__card">
							<h6 className="show__card-h6">OUR HAPPY CLIENTS</h6>
							<div className="show__card-h4">What Client's Say?</div>
							<div className="show__card-text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
								necessitatibus facere ducimus odit. Dolores ducimus a maiores
								amet omnis quae magnam perspiciatis, nam totam nulla, molestias
								accusamus fugiat inventore facere.
							</div>
						</div>
					</div>
				</div>
				<div className="blank"></div>

				<div className="portfolio">
					<div className="container">
						<div className="portfolio__content">
							<h6 className="porfolio__content-h6">You can Meet</h6>
							<h3 className="portfolio__content-h3">OUR TEAM</h3>
						</div>
						<div className="portfolio__section">
							{states.map((user, i) => (
								<div className="portfolio__box" key={i}>
									<div className="portfolio__card">
										<div className="porfolio__card-img">
											<img src={user.image} alt="card" />
										</div>
										<h5 className="portfolio__card-name">{user.name}</h5>
										<p className="portfolio__card-expert">{user.expert}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="contact">
					<div className="container">
						<div className="contact__section">
							<div className="contact__header">
								<h3>Contact Us</h3>
							</div>
							<div className="contact__content">
								<form action="" className="contact__form">
									<input
										className="contact__text-input"
										type="text"
										placeholder="Name"
									/>
									<input
										className="contact__email-input"
										type="text"
										placeholder="Email"
									/>
									<textarea
										className="contact__message-input"
										placeholder="Message"
									/>
								</form>
							</div>
							<div className="contact__button">
								<button className="contact__btn">Submit</button>
							</div>
						</div>
					</div>
				</div>
			</>
		</FrontLayout>
	);
};

export default Home;

const sections = [
	{
		heading: "Web Development",
		text: "Ububa Technologies has reputable proficieny in the development of custom software solutions, portals, e-commerce applications, business application and automation software and products...",
		btn: "Readmore",
	},
	{
		heading: "Mobile Apps Dev.",
		text: "Mobile app development is the process by which a mobile app is developed for mobiles i.e phone  and this involes different applications like games Luncher, chat-apps, message apps, to-do list.",
		btn: "Readmore",
	},
	{
		heading: "Web Dev.",
		text: "Web development is the work involved in developing a web site for the Internet  and for businesses, individuals for the purpose of reaching out to more individuals inregards to their business...",
		btn: "Readmore",
	},
	{
		heading: "Ecommerce Website Dev.",
		text: "Ububa Technologies creates customized e-commerce website that are effective and full of interactions which helps an individual to trade online which involves buying and selling...",
		btn: "Readmore",
	},
	{
		heading: "Graphic Design.",
		text: "Clients rarely have the time to read something. The unique way to convey something fast is by Graphics Design... and here in Ububa we have good Graphics design instructors with  experience",
		btn: "Readmore",
	},
	{
		heading: "Digital Marketing.",
		text: "The advent of digital marketing has challenged the existing marketing strategies of companies across the world. It reaches out out to more people in different parts of the world...",
		btn: "Readmore",
	},
];

const states = [
	{
		image: "/images/gee4.png",
		name: "Mary Kali",
		expert: "Fluter Dev.",
	},
	{
		id: 2,
		image: "/images/gee2.jpg",
		name: "Goeffery Ken",
		expert: "MongoDb",
	},
	{
		id: 3,
		image: "/images/gee3.jpg",
		name: "Opara Blessing",
		expert: "React Js",
	},
];
