/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { IServicesData } from "../../interfaces";

const ServiceCard: React.FC<{ service: IServicesData }> = ({ service }) => {
	const [showBookingModal, setShowBookingModal] = useState(false);
	const handleModal = () => {
		setShowBookingModal(!showBookingModal);
	};
	return (
		<>
			<div className="product-card text-center">
				<div style={{ width: "120px", margin: "auto" }}>
					<img src={service.productImg} alt="service img" />
				</div>
				<h5 style={{ fontWeight: "bold", marginTop: "1em" }}>
					{service.productTitle}
				</h5>
				<p>{service.productDesc}</p>
				<button className="book-service-btn" onClick={handleModal}>
					Book Service
					<i className="fa-solid fa-arrow-right ms-1"></i>
				</button>
			</div>
			{/* book services form */}
			{showBookingModal && (
				<div className="book-service">
					<div className="book-service-inner">
						<div
							className="text-end text-secondary fs-2"
							style={{ transform: "translateX(.9em)", cursor: "pointer" }}
						>
							<i className="fa-solid fa-circle-xmark" onClick={handleModal}></i>
						</div>
						<form>
							<div>
								<label htmlFor="serviceType">Needed Service</label>
								<input type="text" name="" id="" value={service.productTitle} />
							</div>
							<div>
								<label htmlFor="fullName">Full Name</label>
								<input type="text" placeholder="Full Name" name="fullName" />
							</div>
							<div>
								<label htmlFor="phone">Phone</label>
								<input type="number" placeholder="Phone" name="phone" />
							</div>

							<div>
								<label htmlFor="projectDesc">Project Description</label>
								<textarea
									name=""
									id=""
									cols={30}
									rows={7}
									placeholder="Give us a detailed description of your project needs as regards your service selection"
								/>
							</div>
							<div className="text-center">
								<button
									className="btn btn-secondary text-light"
									onClick={handleModal}
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	);
};

export default ServiceCard;
