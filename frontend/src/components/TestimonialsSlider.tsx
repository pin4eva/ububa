/* eslint-disable @next/next/no-img-element */
import { TestimonialsData } from "data/testimonials.data";
import { useEffect } from "react";

const TestimonialsSlider = () => {
	useEffect(() => {
		const slides = document.querySelectorAll(".slide");
		const btnRight = document.querySelector(".next");
		const btnLeft = document.querySelector(".previous");
		// at initial state, position them 100% apart using translateX property
		slides.forEach((slide, i) => {
			slide.setAttribute("style", `transform:translateX(${100 * i}%)`);
		});

		const slidesLength = slides.length;

		const handleSlides = () => {
			slides.forEach((slide, i) => {
				slide.setAttribute(
					"style",
					`transform:translateX(${100 * (i - currentSlide)}%)`
				);
			});
		};
		let currentSlide = 0;
		btnRight?.addEventListener("click", () => {
			if (slidesLength - 1 === currentSlide) {
				currentSlide = 0;
			} else {
				currentSlide++;
			}
			handleSlides();
		});
		btnLeft?.addEventListener("click", () => {
			if (currentSlide === 0) {
				currentSlide = slidesLength - 1;
			} else {
				currentSlide--;
			}
			handleSlides();
		});
	});

	return (
		<section className="testimonials pb-0 text-center">
			<h3 className=" text-center section-title pb-0">Clients Reviews</h3>
			{TestimonialsData.map((testimony) => (
				<div key={testimony.id} className="slide">
					<p className="testimony mt-2 mb-5">{testimony.testimony}</p>
					<div className="d-flex-center">
						<div className="testifier-avi">
							<img src={testimony.image} alt="testifier's image" />
						</div>
						<div>
							<p className="p-0 m-0">{testimony.name}</p>
							<p className="p-0 m-0 text-info">{testimony.occupation}</p>
						</div>
					</div>
				</div>
			))}
			<i className="fa-solid fa-arrow-left previous" />
			<i className="fa-solid fa-arrow-right next" />
		</section>
	);
};

export default TestimonialsSlider;
