import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "animate.css";
import "aos/dist/aos.css";
import { Providers } from "@/components/providers/Providers";
import { siteConfig } from "@/utils/site-config";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500", "700", "900"],
	style: ["normal", "italic"],
	display: "swap",
	variable: "--font-roboto",
});

export const metadata: Metadata = {
	title: {
		default: siteConfig.siteName,
		template: `%s | ${siteConfig.siteName}`,
	},
	description: siteConfig.description,
	keywords: siteConfig.keywords,
	authors: [{ name: siteConfig.siteName }],
	creator: siteConfig.siteName,
	icons: {
		icon: "/favicon.ico",
	},
	openGraph: {
		type: "website",
		locale: siteConfig.locale,
		url: siteConfig.url,
		siteName: siteConfig.siteName,
		title: siteConfig.title,
		description: siteConfig.description,
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`scroll-smooth ${roboto.variable}`}>
			<body className={`antialiased ${roboto.className}`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
