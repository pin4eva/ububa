/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const HeaderComp = () => {
	const [toggle, setToggle] = useState(false);
	const [state, setState] = React.useState(false);
	React.useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	}, []);
	const handleScroll = () => {
		if (window.scrollY > 120) {
			setState(true);
		} else {
			setState(false);
		}
	};

	return (
		<div className={`navbar ${state ? "whiteBg" : "transparent"} `}>
			<div className="container  p-0">
				<div className="navbar__content">
					<div className="navbar__left">
						<img
							src={state ? "/images/logodark.png" : "/images/logoa.svg"}
							alt="logo"
						/>
					</div>

					<ul className="navbar__right">
						{[
							"Home",
							"About",
							"Training",
							"Products",
							<button>Contact</button>,
						].map((item) => (
							<li key={`link-${item}`}>
								<div />
								<a href={`#${item}`}>{item}</a>
							</li>
						))}
					</ul>
					<div className="navbar__menu">
						<HiMenuAlt4 onClick={() => setToggle(true)} />
						{toggle && (
							<motion.div
								whileInView={{ x: [300, 0] }}
								transition={{ duration: 0.85, ease: "easeOut" }}
							>
								<HiX onClick={() => setToggle(false)} />
								<ul>
									{["Home", "About", "Training", "Products"].map((item) => (
										<li key={item}>
											<a href={`#${item}`} onClick={() => setToggle(false)}>
												{item}
											</a>
											{/* <button>Contact</button> */}
										</li>
									))}
								</ul>
							</motion.div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderComp;
