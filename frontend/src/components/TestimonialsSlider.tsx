/* eslint-disable @next/next/no-img-element */
import { TestimonialsData } from "data/testimonials.data";
import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const TestimonialsSlider = () => {
	const [isDesktop, setIsDesktop] = useState(true);
	useEffect(() => {
		window.addEventListener("resize", () => {
			window.innerWidth <= 768
				? setIsDesktop(!isDesktop)
				: setIsDesktop(!isDesktop);
		});
	});

	return (
		<section className="testimonials pb-0 text-center">
			<h3 className=" text-center section-title pb-0">Clients Reviews</h3>
			<Swiper
				modules={[Autoplay, Pagination, Navigation]}
				spaceBetween={1}
				slidesPerView={1}
				pagination={{ clickable: true }}
				navigation={{ enabled: isDesktop ? true : false }}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
					waitForTransition: true,
				}}
			>
				{TestimonialsData.map((testimony) => (
					<SwiperSlide key={testimony.id}>
						<div className="slide">
							<p className="testimony mt-2 mb-5">
								<i className="fa-solid fa-quote-left me-3"></i>
								{testimony.testimony}
								<i className="fa-solid fa-quote-right ms-3"></i>
							</p>
							<div className="d-flex-center gap-3 mb-4">
								<div className="testifier-avi">
									<img src={testimony.image} alt="testifier's image" />
								</div>
								<div className="text-start">
									<p className="p-0 m-0 fs-6 fw-bold">{testimony.name}</p>
									<p className="p-0 m-0 text-info">{testimony.occupation}</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default TestimonialsSlider;
