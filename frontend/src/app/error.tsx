"use client";

import Link from "next/link";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="text-center p-8">
				<h2 className="text-3xl font-bold text-primary mb-4">
					Something went wrong!
				</h2>
				<p className="text-gray-600 mb-6">{error.message}</p>
				<div className="flex gap-4 justify-center">
					<button onClick={() => reset()} className="btn-primary">
						Try again
					</button>
					<Link href="/" className="btn-secondary">
						Go home
					</Link>
				</div>
			</div>
		</div>
	);
}
