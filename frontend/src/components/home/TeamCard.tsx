import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { ITeamCard } from "@/interface/team.interface";

interface TeamCardProps {
	teamMember: ITeamCard;
	delay?: number;
}

export default function TeamCard({ teamMember, delay = 0 }: TeamCardProps) {
	return (
		<div className="group relative" data-aos="fade-up" data-aos-delay={delay}>
			{/* Glow effect on hover */}
			<div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition duration-500" />

			{/* Card Container */}
			<div className="relative bg-white rounded-3xl shadow-soft overflow-hidden transition-all duration-500 group-hover:shadow-hard">
				{/* Image Container */}
				<div className="relative aspect-[4/5] overflow-hidden">
					<Image
						src={teamMember.img}
						alt={teamMember.name}
						fill
						className="object-cover transition-all duration-700 group-hover:scale-110"
					/>

					{/* Gradient Overlay */}
					<div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

					{/* Social Links - Appears on hover */}
					<div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
						<Link
							href={teamMember.socials.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="w-11 h-11 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center
                         hover:bg-primary-600 hover:scale-110 transition-all duration-200 shadow-lg group/link"
						>
							<Linkedin className="w-5 h-5 text-primary-600 group-hover/link:text-white transition-colors" />
						</Link>
						<Link
							href={teamMember.socials.twitter}
							target="_blank"
							rel="noopener noreferrer"
							className="w-11 h-11 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center
                         hover:bg-secondary-600 hover:scale-110 transition-all duration-200 shadow-lg group/link"
						>
							<Twitter className="w-5 h-5 text-secondary-600 group-hover/link:text-white transition-colors" />
						</Link>
					</div>

					{/* Info at bottom - Always visible */}
					<div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-0">
						<div className="backdrop-blur-md bg-white/10 rounded-2xl p-5 border border-white/20">
							<h3 className="text-2xl font-bold text-white mb-1">
								{teamMember.name}
							</h3>
							<p className="text-secondary-400 font-medium">
								{teamMember.position}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
