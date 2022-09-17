/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import LogoComp from "./LogoComp";
import { useState } from "react";
import { useEffect } from "react";
import Footerlogo from "./FooterLogo";

const Footer: React.FC<{ isAtFooter: boolean }> = ({ isAtFooter }) => {
	return (
		<footer>
			<div className="footer-top container">
				<div className="footer-logo d-flex-center">
					<Link href="/">
						<a>{!isAtFooter && <Footerlogo />}</a>
					</Link>
				</div>

				<div className="footer-navs ">
					<div className="footer-navs-detail">
						<h4>Our Services</h4>
						<p>Android App Dev.</p>
						<p>Android UI/UX Design</p>
						<p>iPhone App Dev.</p>
						<p>Wordpress Dev.</p>
						<p>Drupal Dev.</p>
					</div>

					<div className="footer-navs-detail">
						<h4>Technology</h4>
						<p>Mongo DB</p>
						<p>Javascript</p>
						<p>React</p>
						<p>React Native Dev.</p>
						<p>Android Dev.</p>
					</div>

					<div className="footer-navs-detail">
						<h4>Development</h4>
						<p>Web Dev.</p>
						<p>Mobile App Dev.</p>
						<p>Custom Website Design</p>
						<p>Logo Design</p>
					</div>

					<div>
						<h4>Contact</h4>
						<div className="d-flex-center contact-wrapper">
							{/* put icon here */}
							{/* <div className="icon"> */}
							<img src="/images/Location.png" alt="" className="footer-icon" />
							{/* </div> */}
							<p>Victoria Plaza Rumuodara Junction</p>
						</div>
						<div className="d-flex-center contact-wrapper">
							{/* <div className="icon"> */}
							<img src="/images/phone.png" alt="" className="footer-icon" />
							{/* </div> */}
							<p>+234 7062275085</p>
						</div>
						<div className="d-flex-center contact-wrapper">
							{/* <div className="icon"> */}
							<img src="/images/Email.png" alt="" className="footer-icon" />
							{/* </div> */}
							<p>ububa.tech@gmail.com</p>
						</div>
					</div>
				</div>

				<div className="socials-wrapper d-flex-center gap-2 mt-5">
					<img src="/images/LinkedIn.png" alt="" className="footer-icon" />
					<img src="/images/Instagram.png" alt="" className="footer-icon" />
					<img src="/images/Facebook.png" alt="" className="footer-icon" />
					<img src="/images/Twitter.png" alt="" className="footer-icon" />
				</div>
			</div>
			<div className="copyright text-center">
				<p>copyright @ Ububa Technologies 2022.</p>
			</div>
		</footer>
	);
};

export default Footer;
