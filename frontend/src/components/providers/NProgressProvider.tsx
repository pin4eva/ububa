"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";

export default function NProgressProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		NProgress.configure({ showSpinner: false });
	}, []);

	useEffect(() => {
		NProgress.done();
	}, [pathname, searchParams]);

	return <>{children}</>;
}
