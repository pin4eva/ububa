import { TeamData } from "@/data/team.data";
import TeamCard from "./TeamCard";
import { Users } from "lucide-react";

export default function TeamSection() {
	return (
		<section className="py-32 relative overflow-hidden" data-aos="fade-up">
			{/* Background with gradient mesh */}
			<div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary-50/30" />

			{/* Decorative circles */}
			<div className="absolute top-20 right-10 w-64 h-64 bg-accent-200/30 rounded-full blur-3xl" />
			<div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary-200/30 rounded-full blur-3xl" />

			<div className="container-main relative z-10">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-100 to-primary-100 text-primary-700 font-semibold text-sm mb-4">
						<Users className="w-4 h-4" />
						<span>Our Team</span>
					</div>
					<h2 className="section-title mt-4">Meet The Experts</h2>
					<p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
						Our talented team of professionals brings passion, creativity, and
						expertise to every project we undertake.
					</p>
				</div>

				{/* Team Grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
					{TeamData.map((member, index) => (
						<TeamCard key={member.id} teamMember={member} delay={index * 100} />
					))}
				</div>
			</div>
		</section>
	);
}
