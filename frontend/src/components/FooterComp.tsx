/* eslint-disable @next/next/no-img-element */
import React from "react";

const FooterComp = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="footer__section">
					<div className="logo">
						<img
							className="footer__img-logo"
							src="/images/Frame 9.png"
							alt="logo"
						/>
					</div>
					<div className="footer-row">
						<div className=" footer__col-3-a">
							<h4 className="footer__header">Our Services</h4>
							<p className="footer__text">
								Android App Dev
								<br /> Android UI/UX Design
								<br /> iPhone App Dev
								<br /> Wordpress Dev
								<br /> Drupal Dev
							</p>
						</div>
						<div className=" footer__col-3-b">
							<h4 className="footer__header">Techology</h4>

							<p className="footer__text">
								App Dev.
								<br /> React Js
								<br />
								React Native
								<br /> Dev. Android
								<br />
								Javascript
							</p>
						</div>
						<div className=" footer__col-3-c">
							<h4 className="footer__header">Development</h4>
							<p className="footer__text">
								Web Dev. <br />
								Moble App Dev.
								<br /> Custom Website Design
								<br /> Logo Design
							</p>
						</div>
						<div className=" footer__col-3-d">
							<h4 className="footer__header">Contact</h4>
							<span className="footer__span">
								<img
									className="footer__img"
									src="/images/Location.png"
									alt=""
								/>
								<p className="footer__text">Victoria plaza Rumudara Junction</p>
							</span>
							<span className="footer__span">
								<img className="footer__img" src="/images/Vector.png" alt="" />
								<p className="footer__text">+234 7062275085</p>
							</span>
							<span className="footer__span">
								<img className="footer__img" src="/images/Email.png" alt="" />
								<p className="footer__text"> ububa.tech@gmail.com</p>
							</span>
						</div>
						<div className="footer__icons">
							<img
								className="footer__img-media"
								src="/images/Facebook Circled.png"
								alt=""
							/>
							<img
								className="footer__img-media"
								src="/images/LinkedIn.png"
								alt=""
							/>
							<img
								className="footer__img-media"
								src="/images/Instagram.png"
								alt=""
							/>
							<img
								className="footer__img-media"
								src="/images/Twitter Squared.png"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
			<div>
				<hr className="footer__hrv" />
			</div>
			<div>
				<p className="footer__text-copy">
					copyright @ Ububa Technologies {new Date().getFullYear()}
				</p>
			</div>
		</div>
	);
};

export default FooterComp;
