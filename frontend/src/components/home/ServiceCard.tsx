import React from "react";
import { IServicesData } from "../../interfaces";

const ServiceCard: React.FC<{ service: IServicesData }> = ({ service }) => {
	return (
		<div className="product-card">
			<h5>{service.productTitle}</h5>
			<p>{service.productDesc}</p>
			<button className="btn-card btn-lg">Book Service</button>
		</div>
	);
};

export default ServiceCard;
