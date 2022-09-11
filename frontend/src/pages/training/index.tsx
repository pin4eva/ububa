import Link from "next/link";
import React from "react";
import FrontLayout from "../../components/shared/FrontLayout";

const Training = () => {
	return (
		<FrontLayout showHeader={true}>
			<div className="trainingPageContainer">
				<div className="alertContainer">
					<p className="alert alert-info img-fluid">
						<i className="fa-solid fa-circle-exclamation"></i>
						Ububa school of code and design cohort 2 training is ongoing click
						the link to
						<span>
							<Link href={"/training/formpage"}>
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
						<Link href={"/training/formpage"}>
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
	);
};

export default Training;
