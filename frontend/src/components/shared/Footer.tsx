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
						<h4 className="mb-4">Our Services</h4>
						<p>Android App Dev.</p>
						<p>Android UI/UX Design</p>
						<p>iPhone App Dev.</p>
						<p>Wordpress Dev.</p>
						<p>Drupal Dev.</p>
					</div>

					<div className="footer-navs-detail">
						<h4 className="mb-4">Technology</h4>
						<p>Mongo DB</p>
						<p>Javascript</p>
						<p>React</p>
						<p>React Native Dev.</p>
						<p>Android Dev.</p>
					</div>

					<div className="footer-navs-detail">
						<h4 className="mb-4">Development</h4>
						<p>Web Dev.</p>
						<p>Mobile App Dev.</p>
						<p>Custom Website Design</p>
						<p>Logo Design</p>
					</div>

					<div className="footer-contact">
						<h4 className="mb-4">Contact</h4>
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
				</div>

				<div className="socials-wrapper d-flex-center gap-2 mt-5">
					<a href="https://linkedin.com/">
						<i className="fa-brands fa-linkedin"></i>
					</a>
					<a href="https://instagram.com/">
						<i className="fa-brands fa-instagram"></i>
					</a>
					<a href="https://facebook.com/">
						<i className="fa-brands fa-facebook"></i>
					</a>
					<a href="https://twitter.com/">
						<i className="fa-brands fa-twitter"></i>
					</a>
				</div>
			</div>
			<div className="copyright text-center">
				<p>copyright @ Ububa Technologies 2022.</p>
			</div>
		</footer>
	);
};

export default Footer;
