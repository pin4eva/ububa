import { servicesData } from "data/services.data";
import React, { useEffect, useState } from "react";
import ServiceCard from "./home/ServiceCard";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const ServicesSlider = () => {
	return (
		<section id="services" className="container services">
			<h3 className=" text-center section-title">Our Services</h3>
			{/* services swiper for lg screens */}
			<div className="services-swiper_lg">
				<Swiper
					className="services-swiper"
					modules={[Autoplay, Pagination]}
					spaceBetween={5}
					slidesPerView={3}
					// navigation
					pagination={{ clickable: true }}
					loop={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
				>
					{servicesData.map((service) => (
						<SwiperSlide key={service.id}>
							<div className="service-card text-center">
								<div className="img-wrap">
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
								</Link>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			{/* services swiper for md screens */}
			<div className="services-swiper_md">
				<Swiper
					className="services-swiper"
					modules={[Autoplay, Pagination]}
					spaceBetween={5}
					slidesPerView={2}
					// navigation
					pagination={{ clickable: true }}
					loop={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
				>
					{servicesData.map((service) => (
						<SwiperSlide key={service.id}>
							<div className="service-card text-center">
								<div className="img-wrap">
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
								</Link>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			{/* services swiper for sm screens */}
			<div className="services-swiper_sm">
				<Swiper
					className="services-swiper"
					modules={[Autoplay, Pagination]}
					spaceBetween={5}
					slidesPerView={1}
					// navigation
					pagination={{ clickable: true }}
					loop={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
				>
					{servicesData.map((service) => (
						<SwiperSlide key={service.id}>
							<div className="service-card text-center">
								<div className="img-wrap">
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
								</Link>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default ServicesSlider;
