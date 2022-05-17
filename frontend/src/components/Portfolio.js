import React from "react";

const Portfolio = () => {
	const [state] = React.useState([
		{
			id: 1,
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
	]);
	return (
		<div className="portfolio">
			<div className="container">
				<div className="portfolio__content">
					<h6 className="porfolio__content-h6">you&nbsp;can&nbsp;Meet</h6>
					<h3 className="portfolio__content-h3">OUR&nbsp;TEAM</h3>
				</div>
				<div className="portfolio__section">
					{state.map((user) => (
						<div className="portfolio__box" key={user.id}>
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
	);
};

export default Portfolio;
