/* eslint-disable @next/next/no-img-element */
import { TestimonialsData } from "data/testimonials.data";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialsSlider = () => {
	return (
		<section className="testimonials pb-0 text-center  mb-5">
			<h3 className=" text-center section-title pb-0">Clients Reviews</h3>
			<Swiper
				modules={[Autoplay, Pagination, Navigation]}
				spaceBetween={1}
				slidesPerView={1}
				pagination={{ clickable: true }}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
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
