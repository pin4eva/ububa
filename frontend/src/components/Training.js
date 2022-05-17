import React from "react";

const Training = () => {
	const [section] = React.useState([
		{
			id: 1,
			heading: "Web Development",
			text: "Ububa Technologies has reputable proficieny in the development of custom software solutions, portals, e-commerce applications, business application and automation software and products...",
			btn: "Readmore",
		},
		{
			id: 2,
			heading: "Mobile Apps Dev.",
			text: "Mobile app development is the process by which a mobile app is developed for mobiles i.e phone  and this involes different applications like games Luncher, chat-apps, message apps, to-do list.",
			btn: "Readmore",
		},
		{
			id: 3,
			heading: "Web Dev.",
			text: "Web development is the work involved in developing a web site for the Internet  and for businesses, individuals for the purpose of reaching out to more individuals inregards to their business...",
			btn: "Readmore",
		},
		{
			id: 4,
			heading: "Ecommerce Website Dev.",
			text: "Ububa Technologies creates customized e-commerce website that are effective and full of interactions which helps an individual to trade online which involves buying and selling...",
			btn: "Readmore",
		},
		{
			id: 5,
			heading: "Graphic Design.",
			text: "Clients rarely have the time to read something. The unique way to convey something fast is by Graphics Design... and here in Ububa we have good Graphics design instructors with  experience",
			btn: "Readmore",
		},
		{
			id: 6,
			heading: "Digital Marketing.",
			text: "The advent of digital marketing has challenged the existing marketing strategies of companies across the world. It reaches out out to more people in different parts of the world...",
			btn: "Readmore",
		},
	]);
	return (
		<div className="train">
			<div className="container">
				<div className="train__h1">
					<h1>Training</h1>
				</div>
				<div className=" train__cards mt-40">
					{section.map((section) => (
						<div className="train__card" key={section.id}>
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
	);
};

export default Training;
