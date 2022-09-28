/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ITeamCard } from "interface/team.interface";

const TeamCard: React.FC<{ teamMember: ITeamCard }> = ({ teamMember }) => {
	return (
		<div className="team-card">
			<div>
				<Image
					src={teamMember.img}
					alt={`${teamMember.name}`}
					layout="responsive"
					width={100}
					height={100}
					className="member-img"
					placeholder="blur"
					blurDataURL={teamMember.img}
				/>
			</div>

			<div className="team-card-overlay text-center">
				<div className="team-card-overlay-inner">
					<h1 className="mb-0">{teamMember.name}</h1>
					<p className="mt-2 mb-2" style={{ fontStyle: "italic" }}>
						{teamMember.position}
					</p>
					<div className="team-socials-wrapper">
						<a href={teamMember.socials.linkedin}>
							<i className="fa-brands fa-linkedin"></i>
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
