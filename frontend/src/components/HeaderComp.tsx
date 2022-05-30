/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import Link from "next/link";

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
						{navList.map((nav, i) => (
							<li key={i}>
								<div className="dot" />

								<Link href={nav.link}>
									<a>{nav.name}</a>
								</Link>
							</li>
						))}
						<button>Contact</button>
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

const navList = [
	{ name: "Home", link: "/#" },
	{ name: "About", link: "/#about" },
	{ name: "Training", link: "/#training" },
	{ name: "Services", link: "/#services" },
];
