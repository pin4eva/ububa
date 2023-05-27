/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import FrontLayout from "components/shared/FrontLayout";
import Head from "next/head";
import { EventsAlerts } from "data/alerts.data";
import Image from "next/image";

const Training = () => {
	return (
		<>
			<Head>
				<title>Ububa Technology - Training</title>
				<meta
					name="description"
					content="Learn in-demand skills via hands-on learning and in-person classes at Ububa Technology. We journey you from the basic concepts to intermediate concepts so as prepare you for intermediate level roles after your period of training. Apply today to get started with your journey into tech with us."
				/>
			</Head>

			<FrontLayout>
				<main className="training-page container">
					<div
						className="page-alerts text-center p-2 mt-4 mb-4"
						style={{ display: EventsAlerts.length > 0 ? "block" : "none" }}
					>
						{EventsAlerts.map((eventalert) => (
							<Link href={eventalert.link} key={eventalert.id}>
								<a>
									<i className="fa-solid fa-circle-exclamation me-2 text-secondary"></i>
									{eventalert.message}
								</a>
							</Link>
						))}
					</div>

					<div className="ongoing-training">
						<h2 className="section-title mb-4">Ongoing Training</h2>
						<div className="ongoing-training-ads animate__animated animate__slideInRight">
							<Link href="/training/register">
								<Image
									src="/images/ongoing.png"
									alt="ongoing img"
									layout="responsive"
									width={100}
									height={100}
									placeholder="blur"
									blurDataURL="/images/ongoing.png"
								/>
							</Link>
						</div>
					</div>

					<div className="prev-training">
						<h2 className="section-title mb-4">Previous Trainings</h2>
						<div className="prev-training-inner">
							<div
								className="prev-img mb-5 mb-lg-0"
								data-aos="zoom-in-right"
								data-aos-easing="ease-out-cubic"
								data-aos-duration="1000"
							>
								<Image
									src="/images/cohort2.png"
									alt="previous-img"
									layout="responsive"
									width={100}
									height={100}
									placeholder="blur"
									blurDataURL="/images/cohort2.png"
								/>
							</div>
							<div
								className="prev-img"
								data-aos="zoom-in-left"
								data-aos-easing="ease-out-cubic"
								data-aos-duration="1000"
							>
								<Image
									src="/images/cohort1.png"
									alt="previous-img"
									layout="responsive"
									width={100}
									height={100}
									placeholder="blur"
									blurDataURL="/images/cohort1.png"
								/>
							</div>
						</div>
					</div>

					<p className="mt-5 mb-2 text-center">
						Have any questions? Send us an email at info@ububatech.org
					</p>
				</main>
			</FrontLayout>
		</>
	);
};

export default Training;
