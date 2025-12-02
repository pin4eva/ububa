"use client";

import { Suspense, useEffect } from "react";
import AOS from "aos";
import NProgressProvider from "./NProgressProvider";

export function Providers({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: true,
		});
	}, []);

	return (
		<Suspense fallback={null}>
			<NProgressProvider>{children}</NProgressProvider>
		</Suspense>
	);
}
