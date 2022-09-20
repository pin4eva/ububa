/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { IServicesData } from "../../interfaces";

const ServiceCard: React.FC<{
	service: IServicesData;
	handlePayload: (state: boolean) => void;
}> = ({ service, handlePayload }) => {
	return (
		<>
			{/* clicking on an order service tirggers the state of a hook that renders a payload */}

			<div className="product-card text-center">
				<div style={{ width: "120px", margin: "auto" }}>
					<img src={service.productImg} alt="service img" />
				</div>
				<h5 style={{ fontWeight: "bold", marginTop: "1em" }}>
					{service.productTitle}
				</h5>
				<p>{service.productDesc}</p>
				<Link href={"/#contact-us"}>
					<button
						className="book-service-btn"
						onClick={() => handlePayload(true)}
					>
						Book Service
						<i className="fa-solid fa-arrow-right ms-1"></i>
					</button>
				</Link>
			</div>
		</>
	);
};

export default ServiceCard;
