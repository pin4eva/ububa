/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { ITeamCard } from "../../interfaces";

const TeamCard: React.FC<{ teamMember: ITeamCard }> = ({ teamMember }) => {
	const [showTeamInfo, setShowTeamInfo] = useState(false);
	console.log(showTeamInfo);

	return (
		<div
			className="team-card"
			onMouseOver={() => setShowTeamInfo(true)}
			onMouseOut={() => setShowTeamInfo(false)}
		>
			<div>
				<img src={teamMember.img} alt="" className="member-img" />
			</div>

			<div
				className="team-card-overlay text-center"
				style={{ display: showTeamInfo ? "flex" : "none" }}
			>
				<div className="team-card-overlay-inner">
					<h1 className="mb-0">{teamMember.name}</h1>
					<p className="mt-2 mb-2" style={{ fontStyle: "italic" }}>
						{teamMember.position}
					</p>
					<div className="team-socials-wrapper">
						<a href={teamMember.socials.facebook}>
							<i className="fa-brands fa-facebook"></i>
						</a>
						<a href={teamMember.socials.twitter}>
							<i className="fa-brands fa-twitter"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamCard;
