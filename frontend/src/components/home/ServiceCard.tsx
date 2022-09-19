/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IServicesData } from "../../interfaces";

const ServiceCard: React.FC<{ service: IServicesData }> = ({ service }) => {
	return (
		<div className="product-card text-center">
			<div style={{ width: "120px", margin: "auto" }}>
				<img src={service.productImg} alt="service img" />
			</div>
			<h5 style={{ fontWeight: "bold", marginTop: "1em" }}>
				{service.productTitle}
			</h5>
			<p>{service.productDesc}</p>
			<button className="book-service">
				Book Service
				<i className="fa-solid fa-arrow-right ms-1"></i>
			</button>
		</div>
	);
};

export default ServiceCard;
