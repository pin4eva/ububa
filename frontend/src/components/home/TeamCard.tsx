import React from "react";
import { ITeamCard } from "../../interfaces";

const TeamCard: React.FC<{ teamMember: ITeamCard }> = ({ teamMember }) => {
	return (
		<div className="team-card">
			<div>
				<img src={teamMember.img} alt="" className="member-img" />
			</div>
			<h6 className="mt-2 mb-0 text-primary">{teamMember.name}</h6>
			<p style={{ fontStyle: "italic" }}>{teamMember.position}</p>
		</div>
	);
};

export default TeamCard;
