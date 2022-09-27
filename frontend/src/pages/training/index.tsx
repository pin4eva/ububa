/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import FrontLayout from "components/shared/FrontLayout";
import Head from "next/head";

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
				<div className="trainingPageContainer">
					<div className="alertContainer">
						<p className="alert alert-info mb-0 img-fluid">
							<i className="fa-solid fa-circle-exclamation"></i>
							Ububa school of code and design cohort 2 training is ongoing click
							the link to
							<span>
								<Link href={"/training/register"}>
									<a className="alert-link" role="alert">
										apply
									</a>
								</Link>
							</span>
							to learn software development
						</p>
					</div>
					<h2>Ongoing Training</h2>
					<div className="onGoingTraining">
						<div className="cohort3">
							<Link href="/training/register">
								<img
									src="/images/ongoing.png"
									alt="ongoing-img"
									className="img-fluid"
								/>
							</Link>
						</div>
					</div>
					<h2>Previous Trainings</h2>
					<div className="previousTrainings">
						<div className="cohort2">
							<img
								src="/images/cohort2.png"
								alt="previous-img"
								className="img-fluid"
							/>
						</div>
						<div className="cohort1">
							<img
								src="/images/cohort1.png"
								alt="previous-img"
								className="img-fluid"
							/>
						</div>
					</div>
					<p>
						Have any questions? Send us an email at <a>info@ububatech.org</a>
					</p>
				</div>
			</FrontLayout>
		</>
	);
};

export default Training;
