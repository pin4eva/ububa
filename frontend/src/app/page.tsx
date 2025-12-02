import type { Metadata } from "next";
import { FrontLayout } from "@/components/shared/FrontLayout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import TeamSection from "@/components/home/TeamSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";
import { siteConfig } from "@/utils/site-config";

export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description,
};

export default function HomePage() {
	return (
		<>
			<FrontLayout>
				<div className="landing-page" id="home">
					<HeroSection />
					<AboutSection />
					<TeamSection />
					<ServicesSection />
					<TestimonialsSection />
					<ContactSection />
				</div>
			</FrontLayout>
		</>
	);
}
