/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { IServicesData } from "../../interface/services.interface.ts";

const ServiceCard = () => {
	return (
		<div className="product-card text-center">
			{/* <div className="img-wrap">
				<img src={service.productImg} alt="service img" />
			</div>
			<h5 style={{ fontWeight: "bold", marginTop: "1em" }}>
				{service.productTitle}
			</h5>
			<p>{service.productDesc}</p>
			<Link href={"/#contact-us"}>
				<button className="book-service-btn">
					Book Service
					<i className="fa-solid fa-arrow-right ms-1"></i>
				</button>
			</Link> */}
		</div>
	);
};

export default ServiceCard;
